'use client'

import {
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react'

type RevealProps<T extends ElementType> = {
  as?: T
  once?: boolean
  threshold?: number
  rootMargin?: string
  children: ReactNode
  className?: string
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className'>

export default function Reveal<T extends ElementType = 'div'>({
  as,
  once = true,
  threshold = 0.2,
  rootMargin = '0px',
  children,
  className = '',
  ...rest
}: RevealProps<T>) {
  const Component = (as ?? 'div') as ElementType
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) observer.unobserve(entry.target)
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [once, threshold, rootMargin])

  const composedClassName = [className, visible ? 'animate' : ''].filter(Boolean).join(' ')

  const ComponentWithProps = Component as ElementType

  return (
    <ComponentWithProps ref={ref as any} className={composedClassName} {...(rest as object)}>
      {children}
    </ComponentWithProps>
  )
}
