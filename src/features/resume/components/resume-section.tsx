type ResumeSectionProps = {
  title: string;
  children: React.ReactNode;
};

export function ResumeSection({ title, children }: ResumeSectionProps) {
  return (
    <section className="resume-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}
