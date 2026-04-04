'use client'

type Props = { sizes: string[]; selected: string; onSelect: (s: string) => void }

export default function SizeSelector({ sizes, selected, onSelect }: Props) {
  return (
    <div className="flex gap-2 flex-wrap">
      {sizes.map(size => (
        <button key={size} onClick={() => onSelect(size)}
          className={`w-12 h-10 text-xs tracking-widest border rounded-sm transition-colors
            ${selected === size
              ? 'bg-sand text-cream border-sand'
              : 'bg-cream text-nude border-beige hover:border-sand'}`}>
          {size}
        </button>
      ))}
    </div>
  )
}
