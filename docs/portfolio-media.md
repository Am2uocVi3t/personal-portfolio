# Experience and research media

Updated 29 October 2026. All displayed images are stored locally in `public`; the website does not fetch images from Drive or GitHub at runtime.

## Experience

- Outlier / Project Aether: Contributor, freelance via Upwork. The user confirmed a 6 June 2026 start and completion approximately three weeks before 29 October 2026; the end date is displayed as October 2026 without an invented day. Duties and the four evaluation criteria are user-reported. The typographic identity panel is local HTML/CSS, not an official logo. The [Outlier website](https://outlier.ai/) is linked for platform context.
- `public/certifications/speedylabx.jpg`: user-supplied SpeedyLabX logo, preserved unchanged.
- `public/certifications/ojt-certificate.webp`: rendered from the user-supplied OJT PDF in the same directory. The original PDF remains the certificate link. The certificate confirms 5 January–10 May 2026 at General Era Digital Solution Joint Stock Company.
- The SpeedyLabX start date (5 November 2025) and ongoing status come from the user. The AI Tech Lead role was already present in the portfolio.
- OJT subject areas come from the user and their [research folder](https://drive.google.com/drive/folders/1dJfnrnmMCvTFRUxuEnr0aXmnh3AsJClG). The [FCL Application document](https://docs.google.com/document/d/1gDj9W9eEvLubsIve8iwbe46BQbRzURh4V1bnfxJcUIs/edit) supports the application-review scope. The portfolio describes study and literature review, without claiming deployment or new experimental results.
- [Company identification](https://thuvienphapluat.vn/ma-so-thue/cong-ty-co-phan-giai-phap-tong-the-ky-nguyen-so-mst-0311357436.html). No independently verified company photograph was found; the OJT certificate is the company-related visual.

## Paper figures

The eight files in `public/research` were rendered from the four manuscripts supplied in the local `paper` folder. Method images crop the figure, excluding page headers and surrounding prose; result images retain the full page for context. Existing first-page previews in `public/papers` are the third gallery image. Captions identify the original figure/table and page.

| Slug | Method | Results | Paper |
| --- | --- | --- | --- |
| `air-quality` | Figure 2, page 4 | Figures 3–4, page 9 | [OpenReview](https://openreview.net/forum?id=DBK3KG9MRL) |
| `anomaly-detection` | Figure 2, page 4 | Figures 4–5 and Table 6, page 7 | [OpenReview](https://openreview.net/forum?id=PdF6Aohiel) |
| `iot-coverage` | Figure 2, page 5 | Figure 4, page 8 | [OpenReview](https://openreview.net/forum?id=GdQdFzL4P8) |
| `bloom-forecasting` | Figure 1, page 5 | Tables 2–3, page 6 | [OpenReview](https://openreview.net/forum?id=FZXBvl7pE9) |

Publication statuses and numerical results are retained from the existing portfolio. Case-study interpretation is grounded in the supplied manuscripts; no new experiments were run. OpenReview visibility is controlled by OpenReview.

## Project images

| Local image | Source and treatment |
| --- | --- |
| `public/images/fitsync_dashboard.png.jpg` | User-supplied screenshot of the FitSync website and personal-training workspace preview. Replaces the earlier coaching illustration in the project detail. |
| `public/projects/biolisten-dashboard.png` | Copied unchanged from the user-designated BioListen-VN checkout, `docs/webapp.png`. The screenshot shows the competition prototype, including demo data; it is not evidence of deployment at a national park. [Repository image](https://github.com/hei1sme/BioListen-VN/blob/main/docs/webapp.png). |
| `traffic-camera.jpg` | [Input camera frame](https://github.com/Am2uocVi3t/Dynamic_Traffic_Management/blob/main/data/input_images/camera_1740634024475.jpg), copied unchanged. |
| `ppe-demo.webp` | Frame 30 (zero-based) extracted from the repository's [UNSAFE.gif demo](https://github.com/DPL302m-Group03/PPE-Detection/blob/main/data/demos/UNSAFE.gif), converted to WebP at its original 640 × 360 resolution. Preserves the visible detection overlays and unsafe/missing-gloves result. Replaces the architecture diagram in the project detail. |
| `morl.webp` / `.svg` | Original protocol illustration based on the documented 32/32/100 preference split and PCQN/Double-DQN harness. No simulated outcome or performance curve. |
| `financial-regimes.webp` / `.svg` | Original architecture illustration of the existing GARCH → HMM → transition network → anomaly pipeline. Research-on-hold status is retained. |
| `flood-risk.webp` / `.svg` | Original workflow illustration of the documented archive queries, daily aggregation and feature exploration. |
| `attendance.webp` / `.svg` | Original workflow illustration of capture, preprocessing, Haar/LBPH recognition, stable-recognition gate and CSV logging. |

SVG source files accompany the original diagrams so they can be edited without regenerating the artwork. WebP versions are used on the website. Downloaded repository images have source links in their visible captions.

## BioListen VN project evidence

Reviewed the user-designated `C:/INDIVIDUALS/VAIC2026/BioListen-VN` checkout: `README.md`, `notebook/biolistenvn-model-train.ipynb` and `backend/api/routes/audio.py`. The notebook implements EfficientNet-V2-S with three ecological-group outputs and nine threat/background outputs, masked multi-task training, ONNX export and gradient-based Grad-CAM. The API provides ONNX inference and the audio-analysis workflow. The dashboard's activation-map visualisation is not described as identical to the notebook's gradient-based Grad-CAM.

The project entry distinguishes the user's AI/model role from the team's application integration. VAIC affiliation and Stage 1 Top 10 status agree with the existing Fieldwork entry. No training run, field deployment, accuracy benchmark or edge-latency measurement was performed during this portfolio update. The existing Fieldwork section continues to describe the competition; the Projects section describes the technical prototype.
