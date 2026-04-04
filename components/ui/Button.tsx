type ButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'outline'
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
  disabled?: boolean
}

export default function Button({
  children, variant = 'primary', onClick, type = 'button', className = '', disabled = false
}: ButtonProps) {
  const base = 'px-7 py-3 text-xs tracking-widest uppercase font-body transition-opacity rounded-sm'
  const styles = {
    primary: 'bg-sand text-cream hover:opacity-80',
    outline: 'border border-sand text-sand hover:bg-sand hover:text-cream',
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled}
      className={`${base} ${styles[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}>
      {children}
    </button>
  )
}
