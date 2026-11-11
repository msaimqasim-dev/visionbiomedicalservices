# Image audit and source manifest — revision 4

All 11 original unique raster assets were visually inspected, including every expertise-tab state, brand/partner graphics and historical photograph. Repeated uses across all seven routes share these same embedded assets.

## Original asset audit

| Original asset | Decision | Reason / usage |
|---|---|---|
| technician.jpg | Keep | Hands-on anesthesia-equipment maintenance; Home hero, About wide photograph, Services hero. No physician, patient or prohibited device focus. |
| inspection.jpg | Keep | Technician working inside equipment; Home service overview and About hero. |
| testing.jpg | Keep | Hands repairing an electronic medical device; Home introduction, Services maintenance, Regulatory opening. Also reused for the Imaging expertise tab as a maintenance detail instead of scanner photography. |
| operating-room.jpg | Keep | Empty equipment-focused clinical room; Home anesthesia tab and compliance teaser, Services equipment management. No surgery/patient scene, imaging scanner or stethoscope visible. |
| sterilization.jpg | Replace | Relevant subject but original only 512 × 288; replaced with a higher-resolution autoclave detail. |
| medical.jpg | Replace | Surgeons performing a procedure; replaced with a standalone equipment monitor. Original removed. |
| imaging.jpg | Replace | Diagnostic scanner and visible stock watermark; replaced with the existing medical-device repair image. Original removed. |
| award.jpg | Keep | Genuine historical company recognition photograph; About, News and award dialog. |
| logo.png | Keep | Existing company identity; header/footer. |
| hometown-mark.jpg | Keep | Existing partner mark; Home, About, Contact and footer. |
| gsasc-mark.jpg | Keep | Existing partner mark; Home, About, Contact and footer. |

## Downloaded stock sources

| Page | Section | Local image | Source |
|---|---|---|---|
| Home | Equipment expertise — General Medical | assets/images/stock/ecg-monitor-equipment.jpg | [Pexels — ECG Monitor in Hospital](https://www.pexels.com/photo/ecg-monitor-in-hospital-5875565/), Dalila Dalprat |
| Home | Equipment expertise — Sterilization | assets/images/stock/sterilization-autoclave-equipment.jpg | [Pexels — autoclave equipment detail](https://www.pexels.com/photo/doctor-operating-a-medical-instrument-9951400/), Bakytzhan Baurzhanov |
| Home | Equipment expertise — Imaging maintenance detail | assets/images/testing.jpg (existing, reused) | Supplied project asset; original source not established in this pass. |

Both new files downloaded as 1400px-wide JPEGs with source-provided compression. The autoclave photograph shows gloved hands and equipment, not a physician/patient scene; the stock page title does not describe a visible physician role. The monitor photograph contains no people, stethoscope or imaging scanner.

- Monitor download: https://images.pexels.com/photos/5875565/pexels-photo-5875565.jpeg?auto=compress&cs=tinysrgb&w=1400
- Autoclave download: https://images.pexels.com/photos/9951400/pexels-photo-9951400.jpeg?auto=compress&cs=tinysrgb&w=1400
- License reference: https://www.pexels.com/license/ (free use; attribution not required; no endorsement implied).

Pexels was the first and only stock platform used. Two other Pexels candidates (3844581 and 13697732) were visually rejected because of visible/suspected stethoscopes and removed from the project. No Unsplash or generated imagery was needed.

The existing build remains self-contained: image bytes are embedded in the editable index.html asset map and regenerated into every route entry with `node build.cjs`. Production does not hotlink stock URLs. Local files remain available for handoff.

Stock people are described generically; none is identified as a Vision Biomedical employee. Existing award-photo descriptions retain genuine company attribution. Contact's decorative company name reuses Home's exact watermark class, opacity, font, scale, and responsive rule, with aria-hidden=true.

Contact and Get a Quote have no editorial photography; no new photographs were forced into their layouts. Reporting and flexible-support sections remain text-only. No copy, navigation, metadata, agency content, approved statistics, facility categories or locations were rewritten.
