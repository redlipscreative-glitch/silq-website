import SectionTitle from '@/components/ui/SectionTitle'

const sizeData = {
  safe: [
    { size: 'XS', waist: '60-65', hip: '82-87' },
    { size: 'S', waist: '65-70', hip: '87-92' },
    { size: 'M', waist: '70-76', hip: '92-97' },
    { size: 'L', waist: '76-82', hip: '97-102' },
    { size: 'XL', waist: '82-88', hip: '102-108' },
    { size: 'XXL', waist: '88-95', hip: '108-115' },
  ],
  shape: [
    { size: 'S', bust: '80-85', waist: '62-68', hip: '88-93' },
    { size: 'M', bust: '85-90', waist: '68-74', hip: '93-98' },
    { size: 'L', bust: '90-96', waist: '74-80', hip: '98-104' },
    { size: 'XL', bust: '96-102', waist: '80-86', hip: '104-110' },
    { size: 'XXL', bust: '102-108', waist: '86-93', hip: '110-117' },
  ],
}

export default function SizeGuidePage() {
  return (
    <div className="min-h-screen bg-cream px-8 md:px-16 py-10">
      <SectionTitle>Size Guide</SectionTitle>
      <div className="max-w-2xl mx-auto">
        <h2 className="font-heading text-sm tracking-widest uppercase text-nude mb-4">SILQ SAFE — Safety Pants (cm)</h2>
        <table className="w-full text-sm text-nude-light border-collapse mb-12">
          <thead>
            <tr className="bg-beige">
              {['Size', 'Waist', 'Hip'].map(h => (
                <th key={h} className="py-3 px-4 text-left text-xs tracking-widest uppercase text-nude">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sizeData.safe.map(r => (
              <tr key={r.size} className="border-b border-beige">
                <td className="py-3 px-4 font-semibold">{r.size}</td>
                <td className="py-3 px-4">{r.waist}</td>
                <td className="py-3 px-4">{r.hip}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className="font-heading text-sm tracking-widest uppercase text-nude mb-4">SILQ SHAPE — Body Shaper (cm)</h2>
        <table className="w-full text-sm text-nude-light border-collapse mb-12">
          <thead>
            <tr className="bg-beige">
              {['Size', 'Bust', 'Waist', 'Hip'].map(h => (
                <th key={h} className="py-3 px-4 text-left text-xs tracking-widest uppercase text-nude">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sizeData.shape.map(r => (
              <tr key={r.size} className="border-b border-beige">
                <td className="py-3 px-4 font-semibold">{r.size}</td>
                <td className="py-3 px-4">{r.bust}</td>
                <td className="py-3 px-4">{r.waist}</td>
                <td className="py-3 px-4">{r.hip}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="bg-beige rounded p-6">
          <h3 className="font-heading text-xs tracking-widest uppercase text-nude mb-3">How to Measure</h3>
          <ul className="text-sm text-nude-light space-y-2 leading-relaxed list-disc list-inside">
            <li><strong>Bust:</strong> Measure around the fullest part of your chest.</li>
            <li><strong>Waist:</strong> Measure around the narrowest part of your torso.</li>
            <li><strong>Hip:</strong> Measure around the fullest part of your hips, about 20cm below your waist.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
