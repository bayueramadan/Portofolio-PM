// src/Pages/Project/BankJago.jsx
import React from "react";
import CaseSection from "../../components/CaseSection";

export default function BankJago() {
  return (
    <article className="max-w-3xl mx-auto space-y-8">
      <CaseSection title="Background">
        Bank Jago observed that users often experienced delays during QRIS
        transactions because...
      </CaseSection>

      <CaseSection title="Problem Statement">
        - Authentication step caused friction and increased completion time. -
        Users often abandoned payment when biometric prompt was separate from
        flow.
      </CaseSection>

      <CaseSection title="Proposed Solution">
        Integrate biometric (Fingerprint / FaceID) into the QRIS flow so
        authentication is seamless and fast...
      </CaseSection>

      <CaseSection title="Impact & Metrics">
        • 30% faster transaction completion (expected)\n• Reduced drop-off rate
        during payment\n• Increased trust
      </CaseSection>

      <CaseSection title="Next Steps">
        1. Build prototype → 2. Pilot with 5k users → 3. Measure & iterate
      </CaseSection>
    </article>
  );
}
