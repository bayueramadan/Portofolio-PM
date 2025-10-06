// src/Pages/Project/KaiAccess.jsx
import React from "react";
import CaseSection from "../../components/CaseSection";

export default function KaiAccess() {
  return (
    <article className="max-w-3xl mx-auto space-y-8">
      <CaseSection title="Background">
        KAI Access is the official railway ticketing app...
      </CaseSection>

      <CaseSection title="Problem">
        Seat selection is confusing, booking flow lacks progressive
        disclosure...
      </CaseSection>

      <CaseSection title="Solution">
        Redesigned booking screen with clearer hierarchy...
      </CaseSection>

      <CaseSection title="Impact">
        • Faster booking time • Fewer errors • Higher conversion
      </CaseSection>
    </article>
  );
}
