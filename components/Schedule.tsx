import { schedule } from "./content";
import { SectionHead, Shell } from "./primitives/Type";

export default function Schedule() {
  return (
    <section id="horario" className="border-b border-rule">
      <Shell className="py-16 lg:py-[104px]">
        <SectionHead
          className="mb-14"
          kicker="Horario"
          title="The week"
          meta={
            <>
              Wednesdays and Saturdays
              <br />
              Exact times to be confirmed
            </>
          }
        />
        <div className="border-t border-ruleStrong">
          {schedule.map((r) => (
            <div
              key={r.day}
              className="grid grid-cols-1 items-center gap-4 border-b border-rule py-7 text-center lg:grid-cols-[200px_1fr_220px_180px] lg:gap-8 lg:text-left"
            >
              <p className="font-display text-[38px] font-bold uppercase leading-none sm:text-[46px]" style={{ color: r.accent }}>
                {r.day}
              </p>
              <div>
                <p className="mb-[7px] font-display text-[22px] font-semibold uppercase leading-[1.05] sm:text-[27px]">{r.what}</p>
                <p className="font-body text-[11px] font-medium uppercase tracking-[0.18em] text-cream/[0.42]">
                  {r.level}
                </p>
              </div>
              <p className="text-[17px] text-cream/80">{r.time}</p>
              <p className="font-body text-[11px] font-medium uppercase tracking-[0.2em] text-cream/55">{r.teacher}</p>
            </div>
          ))}
        </div>
      </Shell>
    </section>
  );
}
