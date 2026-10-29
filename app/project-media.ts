import type { LocalizedText } from "./portfolio-data";

type ProjectMedia = { src: string; alt: LocalizedText; caption: LocalizedText; source?: string };

export const projectMedia: Record<string, ProjectMedia> = {
  FitSync: {
    src: "/images/fitsync_dashboard.png.jpg",
    alt: { en: "FitSync website with a preview of the personal trainer workspace and InBody records", vi: "Website FitSync với bản xem trước workspace huấn luyện viên và hồ sơ InBody" },
    caption: { en: "FitSync · Website and personal-training workspace preview.", vi: "FitSync · Website và bản xem trước workspace huấn luyện viên." },
  },
  "BioListen VN": {
    src: "/projects/biolisten-dashboard.png",
    alt: { en: "BioListen VN demo dashboard with audio upload, spectrogram, station map and detection panel", vi: "Dashboard demo BioListen VN với tải âm thanh, spectrogram, bản đồ trạm và bảng kết quả phát hiện" },
    caption: { en: "BioListen VN · VAIC 2026 prototype dashboard with demonstration data.", vi: "BioListen VN · Dashboard prototype VAIC 2026 với dữ liệu minh họa." },
    source: "https://github.com/hei1sme/BioListen-VN/blob/main/docs/webapp.png",
  },
  "Adaptive Preference MORL": {
    src: "/projects/morl.webp",
    alt: { en: "MORL protocol: 32 training, 32 validation and 100 test preferences", vi: "Protocol MORL: 32 preference train, 32 validation và 100 test" },
    caption: { en: "Protocol diagram · Preference splits and compute-matched controls.", vi: "Sơ đồ protocol · Chia preference và đối chứng cùng ngân sách tính toán." },
  },
  "Financial Regime Signals": {
    src: "/projects/financial-regimes.webp",
    alt: { en: "Pipeline from GARCH and HMM to regime graphs and anomaly scores", vi: "Pipeline từ GARCH và HMM đến đồ thị chế độ và điểm bất thường" },
    caption: { en: "Architecture diagram · Exploratory research pipeline, currently on hold.", vi: "Sơ đồ kiến trúc · Pipeline nghiên cứu thăm dò, hiện tạm dừng." },
  },
  "Dynamic Traffic Management": {
    src: "/projects/traffic-camera.jpg",
    alt: { en: "Road-camera input image from the Dynamic Traffic Management repository", vi: "Ảnh camera giao thông đầu vào từ repository Dynamic Traffic Management" },
    caption: { en: "Input camera frame · Dynamic Traffic Management repository.", vi: "Khung hình camera đầu vào · Repository Dynamic Traffic Management." },
    source: "https://github.com/Am2uocVi3t/Dynamic_Traffic_Management/blob/main/data/input_images/camera_1740634024475.jpg",
  },
  "Flood Risk Research": {
    src: "/projects/flood-risk.webp",
    alt: { en: "Weather archive, pre-flood windows and feature exploration workflow", vi: "Quy trình dữ liệu thời tiết, cửa sổ trước lũ và khám phá đặc trưng" },
    caption: { en: "Workflow diagram · Data preparation and exploratory feature analysis.", vi: "Sơ đồ quy trình · Chuẩn bị dữ liệu và phân tích đặc trưng thăm dò." },
  },
  "PPE Detection": {
    src: "/projects/ppe-demo.webp",
    alt: { en: "PPE Detection demo frame with annotated detections and an unsafe compliance result", vi: "Khung hình demo PPE Detection với các nhãn nhận diện và kết quả không đạt an toàn" },
    caption: { en: "PPE Detection · Frame from the repository's unsafe-compliance demo.", vi: "PPE Detection · Khung hình từ demo nhận diện trường hợp không đạt an toàn trong repository." },
    source: "https://github.com/DPL302m-Group03/PPE-Detection/blob/main/data/demos/UNSAFE.gif",
  },
  "Face Recognition Attendance": {
    src: "/projects/attendance.webp",
    alt: { en: "Attendance pipeline from image capture through stable recognition to CSV output", vi: "Pipeline điểm danh từ chụp ảnh, nhận diện ổn định đến xuất CSV" },
    caption: { en: "Pipeline diagram · Capture, recognise, confirm and log attendance.", vi: "Sơ đồ pipeline · Chụp ảnh, nhận diện, xác nhận và ghi điểm danh." },
  },
};
