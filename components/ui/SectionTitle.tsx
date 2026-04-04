export default function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center py-10">
      <div className="w-10 h-px bg-sand mx-auto mb-4" />
      <h2 className="font-heading text-sm tracking-widest2 uppercase text-nude">{children}</h2>
    </div>
  )
}
