export type Language = "en" | "vi";
export type Theme = "light" | "dark";
export type LocalizedText = Record<Language, string>;

export const contactLinks = {
  linkedin: "https://www.linkedin.com/in/quoc-viet-huynh/",
  email: "https://mail.google.com/mail/?view=cm&fs=1&to=tyviet1609%40gmail.com",
} as const;

export const navigation = [
  {
    id: "research",
    label: { en: "Research", vi: "Nghiên cứu" },
    icon: "/logos/research.png",
  },
  {
    id: "work",
    label: { en: "Systems", vi: "Hệ thống" },
    icon: "/logos/project.png",
  },
  {
    id: "fieldwork",
    label: { en: "Fieldwork", vi: "Thực chiến" },
    icon: "/logos/certifications.png",
  },
  {
    id: "profile",
    label: { en: "Profile", vi: "Hồ sơ" },
    icon: "/logos/about.png",
  },
  { id: "cv", label: { en: "CV", vi: "CV" }, icon: "/logos/cv.png" },
] as const;

export const ui = {
  en: {
    role: "AI Researcher & Machine Learning Engineer",
    heroLead:
      "I turn research questions into reproducible AI systems: calibrated, stress-tested, and built to survive contact with real data.",
    location: "Ho Chi Minh City, Vietnam · UTC+7",
    availability: "Open to research and machine learning opportunities",
    status: "Open to research and machine learning opportunities",
    connect: "Connect",
    viewWork: "View verified work",
    contact: "Start a conversation",
    researchTitle: "Research with receipts.",
    researchLead:
      "Selected publications and submissions. Every metric below is traceable to a paper, report, notebook, or evaluation artifact.",
    systemsTitle: "Systems, not demos.",
    systemsLead:
      "Applied AI work with the engineering constraints left visible: data protocols, review paths, tests, and honest in-progress labels.",
    fieldworkTitle: "Built under pressure.",
    fieldworkLead:
      "Competition work is where research judgment, product scope, and delivery time collide.",
    profileTitle: "Research depth. Product range.",
    profileLead:
      "AI Engineering student at FPT University and AI Tech Lead at SpeedyLabX, working across trustworthy ML, time series, computer vision, and reinforcement learning.",
    cvTitle: "The complete evidence trail.",
    cvLead:
      "The Master CV is the long-form source of truth. It keeps verified results, limitations, project scope, and research status together before role-specific tailoring.",
    openCv: "Open Master CV",
    downloadCv: "Download PDF",
    previewCv: "Preview on this page",
    closePreview: "Close preview",
    contactTitle: "Open to hard AI problems.",
    contactLead:
      "I am interested in research, ML engineering, and technically ambitious collaborations.",
    menu: "Open navigation",
    close: "Close navigation",
    switchLanguage: "Đổi sang tiếng Việt",
    switchTheme: "Switch color theme",
    repository: "Repository",
    paper: "Read paper",
    details: "Read evidence",
    less: "Hide evidence",
  },
  vi: {
    role: "Nhà nghiên cứu AI & Kỹ sư Machine Learning",
    heroLead:
      "Tôi biến câu hỏi nghiên cứu thành hệ thống AI có thể tái lập: được hiệu chỉnh, stress-test và đủ vững khi gặp dữ liệu thực tế.",
    location: "TP. Hồ Chí Minh, Việt Nam · UTC+7",
    availability: "Sẵn sàng cho cơ hội nghiên cứu và machine learning",
    status: "Sẵn sàng cho cơ hội nghiên cứu và machine learning",
    connect: "Kết nối",
    viewWork: "Xem công việc đã kiểm chứng",
    contact: "Bắt đầu trao đổi",
    researchTitle: "Nghiên cứu có bằng chứng.",
    researchLead:
      "Các công bố và bài đang phản biện tiêu biểu. Mỗi số liệu đều truy ngược được về paper, report, notebook hoặc artifact đánh giá.",
    systemsTitle: "Hệ thống, không chỉ demo.",
    systemsLead:
      "Các dự án AI ứng dụng giữ nguyên những ràng buộc kỹ thuật: protocol dữ liệu, bước kiểm duyệt, test và trạng thái đang phát triển.",
    fieldworkTitle: "Xây dựng dưới áp lực.",
    fieldworkLead:
      "Cuộc thi là nơi tư duy nghiên cứu, phạm vi sản phẩm và thời gian triển khai va vào nhau.",
    profileTitle: "Nghiên cứu sâu. Xây dựng rộng.",
    profileLead:
      "Sinh viên Kỹ thuật Trí tuệ Nhân tạo tại Đại học FPT và AI Tech Lead tại SpeedyLabX, tập trung vào trustworthy ML, chuỗi thời gian, thị giác máy tính và học tăng cường.",
    cvTitle: "Toàn bộ chuỗi bằng chứng.",
    cvLead:
      "Master CV là nguồn dữ liệu dài hạn: giữ kết quả đã kiểm chứng, giới hạn, phạm vi dự án và trạng thái nghiên cứu trước khi tinh chỉnh theo từng vị trí.",
    openCv: "Mở Master CV",
    downloadCv: "Tải PDF",
    previewCv: "Xem trước trên trang",
    closePreview: "Đóng bản xem trước",
    contactTitle: "Sẵn sàng cho bài toán AI khó.",
    contactLead:
      "Tôi quan tâm đến nghiên cứu, ML engineering và các dự án hợp tác có tham vọng kỹ thuật.",
    menu: "Mở điều hướng",
    close: "Đóng điều hướng",
    switchLanguage: "Switch to English",
    switchTheme: "Đổi giao diện màu",
    repository: "Mã nguồn",
    paper: "Đọc bài báo",
    details: "Xem bằng chứng",
    less: "Ẩn bằng chứng",
  },
};

export const proofSignals = [
  {
    value: "AJCAI 2026",
    label: { en: "Accepted poster", vi: "Poster được chấp nhận" },
  },
  {
    value: "VAIC 2026",
    label: { en: "Top 10 · Stage 1", vi: "Top 10 · Vòng 1" },
  },
  {
    value: "4",
    label: {
      en: "Research studies documented",
      vi: "Nghiên cứu có tài liệu đối chứng",
    },
  },
] as const;

export const papers = [
  {
    displayTitle: "Health-Centred Air Quality Alerts",
    image: "/papers/air-quality.webp",
    title:
      "Warning Before the Evening Peak: Health-Centred Air Quality Alerts in New Zealand and Australia",
    venue: "AJCAI 2026",
    status: { en: "Accepted · Poster", vi: "Đã nhận · Poster" },
    summary: {
      en: "Calibrated one-to-three-day air-quality alerts around health-relevant evening peaks.",
      vi: "Hiệu chỉnh cảnh báo chất lượng không khí trước một đến ba ngày quanh các đỉnh ô nhiễm buổi tối có ảnh hưởng sức khỏe.",
    },
    facts: [
      {
        en: "Modelled 10 years of hourly data from 8 Canterbury stations plus 4 years from Melbourne.",
        vi: "Mô hình hóa 10 năm dữ liệu theo giờ từ 8 trạm Canterbury và 4 năm từ Melbourne.",
      },
      {
        en: "At the one-day horizon: MAE 3.19 µg/m³ and R² 0.54; 26% better than persistence, 12% than gradient boosting, and 8% than the sequence baseline.",
        vi: "Ở horizon một ngày: MAE 3,19 µg/m³ và R² 0,54; cải thiện 26% so với persistence, 12% so với gradient boosting và 8% so với sequence baseline.",
      },
      {
        en: "Audited 18 configurations that overestimated exposure protection by 7.7–18.6 percentage points.",
        vi: "Audit 18 cấu hình cho thấy mức bảo vệ phơi nhiễm bị đánh giá quá cao từ 7,7–18,6 điểm phần trăm.",
      },
    ],
    link: "https://openreview.net/forum?id=DBK3KG9MRL",
  },
  {
    displayTitle: "Multimodal Anomaly Detection",
    image: "/papers/anomaly-detection.webp",
    title:
      "Trustworthy Multimodal Anomaly Detection with Conformal Calibration and Counterfactual Attribution",
    venue: "KDD 2027 · Research Track, Cycle 1",
    status: { en: "Decision pending", vi: "Đang chờ quyết định" },
    summary: {
      en: "C-DLE combines split-conformal calibration with counterfactual attribution for numeric and textual time-series signals.",
      vi: "C-DLE kết hợp split-conformal calibration với counterfactual attribution cho tín hiệu chuỗi thời gian số và văn bản.",
    },
    facts: [
      {
        en: "Evaluated on 7 real Time-MMD domains; at conformal level 0.10, F1 rose from 0.641 to 0.757 and TPR from 0.715 to 0.978.",
        vi: "Đánh giá trên 7 domain Time-MMD thực; tại mức conformal 0,10, F1 tăng từ 0,641 lên 0,757 và TPR từ 0,715 lên 0,978.",
      },
      {
        en: "Counterfactual attribution reached 94.3% over 122 detected anomalies against injected synthetic attribution ground truth.",
        vi: "Counterfactual attribution đạt 94,3% trên 122 bất thường được phát hiện, đối chiếu với ground truth attribution tổng hợp được chèn vào.",
      },
      {
        en: "Stress-tested missing modalities, 8 random seeds, and a calibration coreset one-tenth the original size.",
        vi: "Stress-test với modality bị thiếu, 8 random seed và calibration coreset chỉ bằng một phần mười ban đầu.",
      },
    ],
    link: "https://openreview.net/forum?id=PdF6Aohiel",
  },
  {
    displayTitle: "Coverage on Unseen IoT Devices",
    image: "/papers/iot-coverage.webp",
    title:
      "Distribution-Free Coverage of Attack Classes on Devices Absent from Training",
    venue: "AISTATS 2027",
    status: { en: "Under review", vi: "Đang phản biện" },
    summary: {
      en: "Hierarchical class-conditional conformal prediction for attacks on IoT devices unseen during training.",
      vi: "Conformal prediction phân cấp theo lớp cho tấn công trên thiết bị IoT chưa xuất hiện khi huấn luyện.",
    },
    facts: [
      {
        en: "Used 68 physical devices split 40 train / 14 calibration / 14 test across 8 attack classes, 5 classifiers, and 4 conformity scores.",
        vi: "Dùng 68 thiết bị vật lý chia 40 train / 14 calibration / 14 test trên 8 lớp tấn công, 5 classifier và 4 conformity score.",
      },
      {
        en: "The device-quantile rule kept at least 92.1% of new devices within tolerance.",
        vi: "Device-quantile rule giữ ít nhất 92,1% thiết bị mới trong tolerance.",
      },
      {
        en: "Scientific limit: a 5% target is unavailable with 14 calibration devices and becomes informative from 22 devices.",
        vi: "Giới hạn khoa học: target 5% chưa khả dụng với 14 calibration device và bắt đầu có ý nghĩa từ 22 thiết bị.",
      },
    ],
    link: "https://openreview.net/forum?id=GdQdFzL4P8",
  },
  {
    displayTitle: "Bloom Forecasting Under Sparse Data",
    image: "/papers/bloom-forecasting.webp",
    title:
      "Stress-Testing Multi-Source Cyanobacterial Bloom Forecasting under Sparse Monitoring",
    venue: "ACIIDS 2027",
    status: { en: "Under review", vi: "Đang phản biện" },
    summary: {
      en: "A reproducibility audit of multi-source forecasting across seven lakes under sparse monitoring.",
      vi: "Audit khả năng tái lập của dự báo đa nguồn trên bảy hồ trong điều kiện quan trắc thưa.",
    },
    facts: [
      {
        en: "Used an untouched 2023–2024 holdout (n=170). At 7 days, Chl-a history reached weighted F1 0.791 versus 0.688 for full fusion; Holm-adjusted p=0.016.",
        vi: "Dùng holdout 2023–2024 chưa chạm tới (n=170). Ở 7 ngày, lịch sử Chl-a đạt weighted F1 0,791 so với 0,688 của full fusion; Holm-adjusted p=0,016.",
      },
      {
        en: "At 14 days, the fusion benefit was not family-wise significant (p=0.096) and produced 58.8% alert burden.",
        vi: "Ở 14 ngày, lợi ích fusion không còn family-wise significant (p=0,096) và tạo alert burden 58,8%.",
      },
      {
        en: "The audit reduced 22 apparent episodes to 3 eligible incidents; this is negative evidence, not an operational alert-system claim.",
        vi: "Audit giảm 22 episode biểu kiến còn 3 incident hợp lệ; đây là negative evidence, không phải claim về hệ thống cảnh báo vận hành.",
      },
    ],
    link: "https://openreview.net/forum?id=FZXBvl7pE9",
  },
] as const;

export const projects = [
  {
    title: "FitSync",
    subtitle: {
      en: "Personal-training workspace",
      vi: "Workspace cho huấn luyện viên cá nhân",
    },
    role: {
      en: "Project Lead · Product & OCR",
      vi: "Project Lead · Product & OCR",
    },
    period: "Sep–Nov 2026",
    facts: [
      {
        en: "Led a five-person team building an authenticated Next.js and Supabase workspace with tenant isolation, row-level security, and invitations.",
        vi: "Dẫn dắt đội 5 người xây workspace Next.js và Supabase có xác thực, tenant isolation, row-level security và invitation workflow.",
      },
      {
        en: "Designed a five-field InBody review flow, private meal photos, and an inactivity queue; OCR evaluation remains in progress.",
        vi: "Thiết kế quy trình kiểm duyệt InBody 5 trường, ảnh bữa ăn riêng tư và inactivity queue; phần đánh giá OCR vẫn đang thực hiện.",
      },
    ],
    tags: ["Next.js", "Supabase", "PostgreSQL", "OCR"],
    link: "https://github.com/Team-SafeTrail/fitsync-app",
  },
  {
    title: "Adaptive Preference MORL",
    subtitle: {
      en: "Compute-matched RL research harness",
      vi: "Research harness RL cùng ngân sách tính toán",
    },
    role: { en: "Research Engineer", vi: "Kỹ sư nghiên cứu" },
    period: "Sep–Nov 2026",
    facts: [
      {
        en: "Implemented PCQN and per-head Double-DQN for MO-LunarLander (4 objectives) and Minecart (3 objectives).",
        vi: "Cài đặt PCQN và Double-DQN theo từng head cho MO-LunarLander (4 mục tiêu) và Minecart (3 mục tiêu).",
      },
      {
        en: "Built a protocol with 32 training, 32 validation, and 100 test preferences; paired-seed matrices; uniform and compute-matched random controls.",
        vi: "Xây protocol gồm 32 training, 32 validation và 100 test preference; paired-seed matrix; đối chứng uniform và random cùng compute budget.",
      },
      {
        en: "Engineering validation: 21 tests passed. Main multi-seed experiments remain unrun, so no superiority or convergence claim is made.",
        vi: "Kiểm định kỹ thuật: 21 test passed. Thí nghiệm multi-seed chính chưa chạy nên không tuyên bố superiority hay convergence.",
      },
    ],
    tags: ["PyTorch", "Multi-objective RL", "Double-DQN", "Testing"],
    link: "https://github.com/Am2uocVi3t/REL301m_AdaptivePreferenceMORL",
  },
  {
    title: "Financial Regime Signals",
    subtitle: {
      en: "Graph-based early warning research",
      vi: "Nghiên cứu cảnh báo sớm dựa trên đồ thị",
    },
    role: { en: "Research project", vi: "Dự án nghiên cứu" },
    period: "SpeedyLabX",
    status: { en: "On hold", vi: "Tạm dừng" },
    facts: [
      {
        en: "Implemented GARCH volatility features, HMM regime modelling, and directed transition networks to study changes in financial market regimes.",
        vi: "Cài đặt đặc trưng biến động GARCH, mô hình chế độ HMM và mạng chuyển trạng thái có hướng để nghiên cứu thay đổi chế độ thị trường tài chính.",
      },
      {
        en: "Built a UniGAD-based graph anomaly module with reconstruction and contrastive objectives, producing early warning scores and embeddings for downstream models.",
        vi: "Xây module phát hiện bất thường đồ thị dựa trên UniGAD với mục tiêu tái tạo và contrastive, tạo điểm cảnh báo sớm và embedding cho mô hình phía sau.",
      },
      {
        en: "Recorded nine adjacency-loss ablation configurations and saved LSTM, DoubleAdapt-style, and multi-step diffusion experiment artifacts. Research is on hold; results remain exploratory.",
        vi: "Lưu kết quả chín cấu hình ablation cho adjacency loss và artifact thí nghiệm LSTM, mô hình theo hướng DoubleAdapt và diffusion nhiều bước. Nghiên cứu đang tạm dừng; kết quả còn mang tính thăm dò.",
      },
    ],
    tags: ["PyTorch", "Graph Neural Networks", "GARCH", "HMM", "Time Series"],
    link: null,
  },
  {
    title: "Dynamic Traffic Management",
    subtitle: {
      en: "Lane-level traffic image analysis",
      vi: "Phân tích ảnh giao thông theo từng làn",
    },
    role: { en: "ADY291m · Course project", vi: "ADY291m · Đồ án môn học" },
    period: "2025",
    facts: [
      {
        en: "Developed a Python image-comparison prototype that separates left/right lanes and selects day/night reference images from camera timestamps.",
        vi: "Phát triển prototype so sánh ảnh bằng Python, tách làn trái/phải và chọn ảnh tham chiếu ngày/đêm từ timestamp của camera.",
      },
      {
        en: "Organized reference images into low, medium, and high traffic levels; used grayscale resizing and MSE-based similarity to report a class and comparison scores for each lane.",
        vi: "Tổ chức ảnh tham chiếu theo ba mức lưu lượng thấp, trung bình và cao; dùng ảnh xám, resize và độ tương đồng dựa trên MSE để trả về mức lưu lượng cùng điểm so sánh cho từng làn.",
      },
      {
        en: "Explored OpenCV polygon masks and a Pillow comparison workflow. Scope is an image-analysis prototype; traffic-signal control and field accuracy were not validated.",
        vi: "Thử nghiệm mask đa giác OpenCV và quy trình so sánh bằng Pillow. Phạm vi là prototype phân tích ảnh; chưa xác thực điều khiển đèn tín hiệu hoặc độ chính xác ngoài thực địa.",
      },
    ],
    tags: ["Python", "OpenCV", "Pillow", "NumPy", "Image Processing"],
    link: "https://github.com/Am2uocVi3t/Dynamic_Traffic_Management",
  },
  {
    title: "Flood Risk Research",
    subtitle: {
      en: "Weather data and feature exploration",
      vi: "Khám phá dữ liệu và đặc trưng thời tiết",
    },
    role: { en: "DAP391m · Course project", vi: "DAP391m · Đồ án môn học" },
    period: "2025",
    facts: [
      {
        en: "Built Open-Meteo archive requests using Vietnamese province coordinates and flood-event dates, with hourly weather data aggregated into daily minimum, mean, and maximum features.",
        vi: "Xây truy vấn Open-Meteo Archive theo tọa độ tỉnh Việt Nam và ngày xảy ra lũ, tổng hợp dữ liệu thời tiết theo giờ thành đặc trưng min, mean và max theo ngày.",
      },
      {
        en: "Prepared pre-flood windows and used pandas, correlation heatmaps, and mutual-information regression to explore relationships between rainfall, humidity, cloud cover, and other weather variables.",
        vi: "Chuẩn bị cửa sổ dữ liệu trước lũ; dùng pandas, heatmap tương quan và mutual-information regression để khám phá quan hệ giữa lượng mưa, độ ẩm, mây và các biến thời tiết khác.",
      },
      {
        en: "Documented an exploratory notebook with 23 daily observations and 79 columns. The available work establishes data preparation and feature analysis, with predictive-model validation still to be demonstrated.",
        vi: "Lưu notebook thăm dò với 23 quan sát theo ngày và 79 cột. Phần hiện có thể hiện bước chuẩn bị dữ liệu và phân tích đặc trưng; chưa có bằng chứng kiểm định mô hình dự báo.",
      },
    ],
    tags: ["Python", "pandas", "Open-Meteo", "scikit-learn", "Seaborn"],
    link: "https://github.com/Am2uocVi3t/DAP391m_Research",
  },
  {
    title: "PPE Detection",
    subtitle: {
      en: "Safety monitoring pipeline",
      vi: "Pipeline giám sát an toàn",
    },
    role: { en: "Deep Learning Engineer", vi: "Kỹ sư Deep Learning" },
    period: "Sep–Dec 2024",
    facts: [
      {
        en: "Unified 9 public datasets into a 9-class detection schema and benchmarked YOLOv8s/m/l against RT-DETR.",
        vi: "Hợp nhất 9 bộ dữ liệu công khai thành schema 9 lớp detection và benchmark YOLOv8s/m/l với RT-DETR.",
      },
      {
        en: "Delivered webcam/video inference, Safe/Unsafe compliance logic, and annotated-video export; no unverified mAP or FPS claims.",
        vi: "Xây dựng inference webcam/video, logic tuân thủ Safe/Unsafe và xuất video đã annotate; không dùng claim mAP hoặc FPS chưa được xác minh.",
      },
    ],
    tags: ["YOLOv8", "RT-DETR", "OpenCV", "Streamlit"],
    link: "https://github.com/DPL302m-Group03/PPE-Detection",
  },
  {
    title: "Face Recognition Attendance",
    subtitle: {
      en: "Desktop computer-vision workflow",
      vi: "Quy trình computer vision trên desktop",
    },
    role: { en: "Model Engineer", vi: "Kỹ sư mô hình" },
    period: "Jun–Aug 2024",
    facts: [
      {
        en: "Built a nine-step Haar/LBPH pipeline from 20 captured images per person, with 150×150 preprocessing, equalization, denoising, and sharpening.",
        vi: "Xây pipeline Haar/LBPH 9 bước từ 20 ảnh mỗi người, tiền xử lý 150×150, cân bằng histogram, khử nhiễu và làm nét.",
      },
      {
        en: "Required two seconds of stable recognition before logging each person once per day; used Tkinter multithreading and CSV output.",
        vi: "Yêu cầu nhận diện ổn định 2 giây trước khi ghi mỗi người một lần mỗi ngày; dùng Tkinter multithreading và xuất CSV.",
      },
    ],
    tags: ["OpenCV", "LBPH", "Tkinter", "Multithreading"],
    link: "https://github.com/Am2uocVi3t/Attendance_System",
  },
] as const;

export const competitions = [
  {
    title: "VAIC 2026 · BioListen VN",
    role: {
      en: "AI & Technical Lead · NeuraX.ai",
      vi: "AI & Technical Lead · NeuraX.ai",
    },
    period: "Jul 2026",
    status: { en: "Top 10 · Stage 1", vi: "Top 10 · Vòng 1" },
    description: {
      en: "Led a three-person team through a 48-hour hackathon, building a dual-head EfficientNet-V2-S pipeline over 4,741 audio samples (3,792 train / 949 validation), with 3 ecological groups and 9 threat/background classes.",
      vi: "Dẫn dắt đội 3 người trong hackathon 48 giờ, xây pipeline EfficientNet-V2-S hai head trên 4.741 audio sample (3.792 train / 949 validation), gồm 3 nhóm sinh thái và 9 lớp nguy cơ/background.",
    },
    detail: {
      en: "Implemented masked multi-task loss, ONNX export, and Grad-CAM. The result was Stage 1 Top 10, with no final prize and no unverified accuracy or latency claim.",
      vi: "Cài đặt masked multi-task loss, ONNX export và Grad-CAM. Kết quả là Top 10 Vòng 1, không có giải chung cuộc và không dùng claim accuracy hay latency chưa được kiểm chứng.",
    },
    image: "/certifications/vaic-2026.jpg",
    imageAlt: {
      en: "Blue Vietnam AI Innovation Challenge 2026 badges, including Quoc Viet's AI-Native Builder badge",
      vi: "Các thẻ xanh Vietnam AI Innovation Challenge 2026, gồm thẻ AI-Native Builder của Quốc Việt",
    },
    link: "https://github.com/hei1sme/BioListen-VN",
  },
  {
    title: "NASA Space Apps 2026",
    role: { en: "AI & Tech Lead", vi: "AI & Tech Lead" },
    period: "Nov 14–15, 2026",
    status: { en: "Registered · Upcoming", vi: "Đã đăng ký · Sắp diễn ra" },
    description: {
      en: "Leading technical preparation and challenge selection for a five-person cross-disciplinary team spanning AI, backend, hardware/IoT, and environmental science/GIS.",
      vi: "Dẫn dắt chuẩn bị kỹ thuật và chọn challenge cho đội liên ngành 5 người gồm AI, backend, hardware/IoT và environmental science/GIS.",
    },
  },
  {
    title: "NASA Space Apps 2025 · CosmicOptic",
    photo: "/images/me_background_NASASpaceApp25.jpg",
    role: { en: "Data & Model Engineer", vi: "Kỹ sư dữ liệu & mô hình" },
    period: "2025",
    status: { en: "48-hour hackathon", vi: "Hackathon 48 giờ" },
    description: {
      en: "Built a Lightkurve crawler for Kepler/K2 light-curve acquisition, engineered transit and orbital features, and connected the results to FastAPI visualization.",
      vi: "Xây Lightkurve crawler để lấy light curve Kepler/K2, tạo đặc trưng transit và quỹ đạo, rồi kết nối kết quả với trực quan hóa FastAPI.",
    },
  },
  {
    title: "FPT Hackathon",
    photo: "/images/myteam_in_FPTHackathon_on_stadium.jpg",
    role: {
      en: "Competitive Programming Participant",
      vi: "Thí sinh lập trình thi đấu",
    },
    period: "May 2025",
    status: { en: "ICPC-style contest", vi: "Cuộc thi kiểu ICPC" },
    description: {
      en: "Solved dynamic-programming and graph problems under contest time constraints.",
      vi: "Giải các bài dynamic programming và đồ thị trong giới hạn thời gian của cuộc thi.",
    },
  },
] as const;

export const education = [
  {
    school: "FPT University",
    image: "/university/fpt-university.png",
    degree: {
      en: "B.Eng. in Artificial Intelligence",
      vi: "Kỹ sư Trí tuệ Nhân tạo",
    },
    period: { en: "Expected Jan 2027", vi: "Dự kiến 01/2027" },
    detail: {
      en: "GPA 3.12/4.0 · Honorable Student, Fall 2025",
      vi: "GPA 3,12/4,0 · Sinh viên Giỏi, Fall 2025",
    },
  },
  {
    school: "HELP University",
    image: "/university/help-university.png",
    degree: {
      en: "English Proficiency Program",
      vi: "Chương trình Nâng cao Năng lực Tiếng Anh",
    },
    period: { en: "Feb 2024", vi: "02/2024" },
    detail: { en: "Kuala Lumpur, Malaysia", vi: "Kuala Lumpur, Malaysia" },
  },
] as const;

export const skillLines = [
  {
    title: { en: "Research", vi: "Nghiên cứu" },
    value:
      "Conformal prediction · Time series · Anomaly detection · Explainable AI · Multi-objective RL",
  },
  {
    title: { en: "Learning", vi: "Mô hình học" },
    value:
      "PyTorch · TensorFlow/Keras · scikit-learn · XGBoost · LightGBM · YOLO · RT-DETR",
  },
  {
    title: { en: "Engineering", vi: "Kỹ thuật" },
    value:
      "Python · SQL · TypeScript · Next.js · FastAPI · PostgreSQL · Supabase · Docker · GitHub Actions",
  },
] as const;

export const certifications = [
  {
    title: {
      en: "Honorable Student of the Semester",
      vi: "Sinh viên Giỏi học kỳ",
    },
    issuer: "FPT University · Fall 2025",
    image: "/certifications/honorable-student-fall-2025.png",
    link: "/certifications/HuynhQuocViet-SE194225-Hocsinhgioi-GK2613873-26102026.pdf",
  },
  {
    title: {
      en: "Vietnam AI Innovation Challenge",
      vi: "Vietnam AI Innovation Challenge",
    },
    issuer: "AI-Native Builder · 2026",
    image: "/certifications/vaic-2026.jpg",
    link: "/certifications/vaic-2026.jpg",
  },
  {
    title: { en: "NASA Space Apps Challenge", vi: "NASA Space Apps Challenge" },
    issuer: "NASA Space Apps · 2025",
    image: "/certifications/nasa-space-apps-challenge.png",
    link: "/certifications/nasa-space-apps-challenge.png",
  },
  {
    title: {
      en: "Top 2 · B-Learning in Java OOP",
      vi: "Top 2 · B-Learning môn Java OOP",
    },
    issuer: "FPT University · 2024",
    image: "/certifications/top2-b-learning-in-javaoop.png",
    link: "/certifications/top2-b-learning-in-javaoop.png",
  },
  {
    title: { en: "FPT Hackathon", vi: "FPT Hackathon" },
    issuer: "FPT University · 2025",
    image: "/certifications/fpt-hackathon.png",
    link: "/certifications/fpt-hackathon.png",
  },
] as const;

export const socialLinks = [
  { label: "LinkedIn", href: contactLinks.linkedin },
  { label: "Email", href: contactLinks.email },
  { label: "GitHub", href: "https://github.com/Am2uocVi3t" },
  { label: "ORCID", href: "https://orcid.org/0009-0003-8727-9998" },
] as const;
