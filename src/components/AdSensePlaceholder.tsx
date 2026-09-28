type AdSensePlaceholderProps = {
  title?: string;
  description?: string;
  compact?: boolean;
};

const AdSensePlaceholder = ({
  title = "Espaço para anúncio",
  description = "Área reservada para publicidade do Google AdSense.",
  compact = false,
}: AdSensePlaceholderProps) => {
  return (
    <div
      className={
        compact
          ? "rounded-2xl border border-dashed border-primary/30 bg-gradient-to-r from-primary/5 via-background to-secondary/5 p-4 text-center"
          : "rounded-3xl border border-dashed border-primary/30 bg-gradient-to-r from-primary/5 via-background to-secondary/5 p-6 md:p-8 text-center shadow-sm"
      }
      aria-label={title}
    >
      <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
        AdSense
      </div>
      <h3 className="mt-3 text-lg font-display font-bold text-foreground">
        {title}
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

export default AdSensePlaceholder;
