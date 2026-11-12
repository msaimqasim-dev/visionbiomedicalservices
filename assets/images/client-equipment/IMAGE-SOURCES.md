# Client equipment imagery

These two images come from the client's existing Vision Biomedical Services website. They are used strictly as biomedical maintenance and reporting illustrations, not as stock photos or equipment listings. Original files were downloaded locally without upscaling or importing surrounding page content. Both are 1000 × 750 JPEGs.

| Local file | Original source page | Original image URL | Current placement | Service relevance |
|---|---|---|---|---|
| `equipment-component-closeup.jpg` | [Client parts page](https://www.visionbiomedicalservices.com/sales/parts/) | [Original component photograph](https://www.visionbiomedicalservices.com/wp-content/uploads/2019/10/Excel-210-part-pic22222.jpg) | Services → Tracking & Reporting, existing left editorial column | Equipment control knobs and mechanical components illustrate component-level tracking and equipment history. |
| `autoclave-chamber-inspection.jpg` | [Client equipment page](https://www.visionbiomedicalservices.com/sales/equipment/) | [Original autoclave photograph](https://www.visionbiomedicalservices.com/wp-content/uploads/2019/10/m11-pic-33333.jpg) | Services → Maintenance & Repair, existing image container | Open chamber, instrument trays and door seal provide a relevant inspection and preventive-maintenance context. |

Audit: all seven equipment/component photographs linked from the two source pages were visually reviewed. The two selected photographs show technical details without people, procedures, stethoscopes, imaging scanners, prices, or promotional overlays. The remaining five were not imported into the project: the full assembly and reverse-side views were less focused; the front equipment view looked more like a listing; the control-panel and second chamber views were redundant.

Only image bytes were reused. No product names, product prices, descriptions, purchase links, enquiry states, sales navigation, or commerce functionality were imported. The source-page URLs above are developer provenance records only; they are not exposed as navigation or links on the live pages.

Local image files are embedded into the shared `index.html` asset map, matching the site's existing self-contained approach. Run `node build.cjs` to regenerate all eight route entries. Production uses embedded local image data and does not hotlink the original website.

No third image was added. The existing Regulatory Compliance repair photograph remains in place. Home and all other page imagery remain unchanged.
