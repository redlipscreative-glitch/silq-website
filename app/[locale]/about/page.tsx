import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="bg-beige px-8 md:px-16 py-20 text-center">
        <Image src="/logo.png" alt="SILQ" width={120} height={60} className="mx-auto mb-8 object-contain" />
        <h1 className="font-heading text-3xl tracking-widest uppercase text-nude mb-6">Our Story</h1>
        <p className="text-base italic text-nude-light leading-8 max-w-xl mx-auto">
          "SILQ was born for the woman who moves through life with grace and purpose.
          Whether you're on the go or shaping your silhouette, SILQ gives you the
          smoothness beneath and the confidence on top."
        </p>
      </div>
      <div className="px-8 md:px-16 py-16 max-w-2xl mx-auto">
        <h2 className="font-heading text-sm tracking-widest uppercase text-nude mb-6">Our Values</h2>
        {[
          { title: 'Quality', desc: 'Every SILQ piece is crafted with premium materials designed for comfort and durability.' },
          { title: 'Confidence', desc: 'We believe every woman deserves to feel beautiful and confident every single day.' },
          { title: 'Inclusivity', desc: 'SILQ is designed for all women — every shape, every size, every lifestyle.' },
        ].map(v => (
          <div key={v.title} className="mb-8 pb-8 border-b border-beige last:border-0">
            <div className="font-heading text-sm tracking-widest uppercase text-sand mb-2">{v.title}</div>
            <p className="text-sm text-nude-light leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
