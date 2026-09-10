import { useState, useEffect } from 'react'

interface TypeAnimationProps {
  strings: string[]
  speed?: number
  deleteSpeed?: number
  pauseDuration?: number
}

export const TypeAnimation = ({ 
  strings, 
  speed = 100, 
  deleteSpeed = 50, 
  pauseDuration = 2000 
}: TypeAnimationProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentString = strings[currentIndex]
    
    if (!isDeleting) {
      if (currentText.length < currentString.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentString.slice(0, currentText.length + 1))
        }, speed)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => setIsDeleting(true), pauseDuration)
        return () => clearTimeout(timeout)
      }
    } else {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1))
        }, deleteSpeed)
        return () => clearTimeout(timeout)
      } else {
        setIsDeleting(false)
        setCurrentIndex((prev) => (prev + 1) % strings.length)
      }
    }
  }, [currentText, isDeleting, currentIndex, strings, speed, deleteSpeed, pauseDuration])

  return (
    <span className="gradient-text inline-block">
      {currentText}
      <span className="animate-pulse ml-1 text-primary">|</span>
    </span>
  )
}