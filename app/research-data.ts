import type { LocalizedText } from "./portfolio-data";

export type ResearchFigure = {
  src: string;
  title: LocalizedText;
  caption: LocalizedText;
};

export type ResearchStudy = {
  slug: string;
  paperIndex: number;
  heading: LocalizedText;
  question: LocalizedText;
  approach: LocalizedText;
  limitation: LocalizedText;
  takeaway: LocalizedText;
  steps: { title: LocalizedText; description: LocalizedText }[];
  figures: ResearchFigure[];
};

export const researchStudies: ResearchStudy[] = [
  {
    slug: "air-quality", paperIndex: 0,
    heading: { en: "Before the evening peak.", vi: "Trước đỉnh ô nhiễm tối." },
    question: {
      en: "How much exposure does an air-quality warning actually cover, and does it arrive before people breathe the polluted air? Daily averages can hide the evening peak that matters most.",
      vi: "Cảnh báo chất lượng không khí thực sự bao phủ bao nhiêu phơi nhiễm, và có đến trước khi con người hít thở không khí ô nhiễm? Trung bình ngày có thể che khuất đỉnh ô nhiễm buổi tối.",
    },
    approach: {
      en: "Compare information sources under one evaluation protocol, keeping the estimator and calibration fixed. Pair hourly monitoring with archived weather forecasts, then evaluate both forecast error and the timing of exposure covered by warnings.",
      vi: "So sánh các nguồn thông tin trong cùng một protocol, giữ cố định bộ ước lượng và hiệu chỉnh. Kết hợp quan trắc theo giờ với dự báo thời tiết lưu trữ, rồi đánh giá cả sai số và thời điểm phơi nhiễm được cảnh báo bao phủ.",
    },
    limitation: {
      en: "Transfer is not automatic: Melbourne is affected by transported smoke, and no method in the study exceeds R² 0.10 there. The Canterbury result should not be read as a general guarantee across locations.",
      vi: "Khả năng chuyển giao không tự động: Melbourne chịu ảnh hưởng của khói vận chuyển từ xa và không phương pháp nào trong nghiên cứu vượt R² 0,10 tại đây. Kết quả Canterbury không phải bảo đảm chung cho mọi địa điểm.",
    },
    takeaway: {
      en: "Evaluate the exposure a warning covers, not just the days it labels correctly. Access to archived forecast information and the timing of an alert are part of the system design.",
      vi: "Đánh giá lượng phơi nhiễm mà cảnh báo bao phủ, bên cạnh số ngày phân loại đúng. Dữ liệu dự báo lưu trữ và thời điểm phát cảnh báo đều là thành phần của thiết kế hệ thống.",
    },
    steps: [
      { title: { en: "Observe", vi: "Quan trắc" }, description: { en: "Hourly records from eight Canterbury stations and the Melbourne network establish when exposure occurs.", vi: "Dữ liệu theo giờ từ tám trạm Canterbury và mạng Melbourne xác định thời điểm xảy ra phơi nhiễm." } },
      { title: { en: "Forecast", vi: "Dự báo" }, description: { en: "Compare one-to-three-day forecasts with persistence, boosting and sequence baselines using the same protocol.", vi: "So sánh dự báo trước một đến ba ngày với persistence, boosting và sequence baseline trong cùng protocol." } },
      { title: { en: "Audit warnings", vi: "Audit cảnh báo" }, description: { en: "Inspect exposure coverage and warning burden across 18 configurations, including the evening peak.", vi: "Kiểm tra độ bao phủ phơi nhiễm và gánh nặng cảnh báo trên 18 cấu hình, bao gồm đỉnh buổi tối." } },
    ],
    figures: [
      { src: "/research/air-quality-method.webp", title: { en: "Evaluation pipeline", vi: "Quy trình đánh giá" }, caption: { en: "Figure 2 · Fixed estimator and calibration, different information sources. From the supplied manuscript, page 4.", vi: "Hình 2 · Giữ cố định bộ ước lượng và hiệu chỉnh, thay đổi nguồn thông tin. Bản thảo gốc, trang 4." } },
      { src: "/research/air-quality-results.webp", title: { en: "Warning skill & site behaviour", vi: "Hiệu quả cảnh báo theo trạm" }, caption: { en: "Figures 3–4 · Lead time, exposure protection and site-level explanation fidelity. Manuscript page 9.", vi: "Hình 3–4 · Horizon, bảo vệ phơi nhiễm và độ trung thực của giải thích theo trạm. Bản thảo, trang 9." } },
    ],
  },
  {
    slug: "anomaly-detection", paperIndex: 1,
    heading: { en: "Context you can trust.", vi: "Ngữ cảnh đáng tin cậy." },
    question: {
      en: "Does text genuinely help detect time-series anomalies, or does it describe an outcome that was unavailable at the prediction time? A useful detector must also explain which modality triggered its alarm.",
      vi: "Văn bản thực sự giúp phát hiện bất thường chuỗi thời gian, hay chỉ mô tả kết quả chưa có tại thời điểm dự đoán? Bộ phát hiện còn cần giải thích modality nào đã gây ra cảnh báo.",
    },
    approach: {
      en: "C-DLE places a leakage audit before multimodal fusion. It then uses split-conformal calibration to set alarm thresholds and cross-modal counterfactual sufficiency to attribute detected anomalies.",
      vi: "C-DLE đặt bước audit rò rỉ thông tin trước multimodal fusion. Sau đó dùng split-conformal calibration để đặt ngưỡng cảnh báo và cross-modal counterfactual sufficiency để quy thuộc bất thường.",
    },
    limitation: {
      en: "The 94.3% attribution result is measured against injected synthetic attribution ground truth. It does not establish causal explanations for every real-world anomaly. Conformal interpretation also depends on the calibration assumptions.",
      vi: "Kết quả attribution 94,3% được đo trên ground truth attribution tổng hợp được chèn vào. Kết quả này không chứng minh giải thích nhân quả cho mọi bất thường thực tế. Diễn giải conformal còn phụ thuộc giả định hiệu chỉnh.",
    },
    takeaway: {
      en: "Audit when a modality becomes available before celebrating fusion gains. Detection, calibration and explanation need separate evidence.",
      vi: "Kiểm tra thời điểm modality trở nên khả dụng trước khi kết luận về lợi ích fusion. Phát hiện, hiệu chỉnh và giải thích cần các bằng chứng riêng.",
    },
    steps: [
      { title: { en: "Audit timing", vi: "Audit thời điểm" }, description: { en: "Compare same-period and embargoed text to separate usable context from look-ahead leakage.", vi: "So sánh văn bản cùng kỳ và văn bản có embargo để phân biệt ngữ cảnh khả dụng với rò rỉ thông tin tương lai." } },
      { title: { en: "Detect & calibrate", vi: "Phát hiện & hiệu chỉnh" }, description: { en: "Fuse numeric and text scores, then calibrate alarms, including regimes with a missing modality.", vi: "Kết hợp điểm số và văn bản, rồi hiệu chỉnh cảnh báo, bao gồm tình huống thiếu modality." } },
      { title: { en: "Attribute", vi: "Quy thuộc" }, description: { en: "Test counterfactual sufficiency to distinguish numeric, text and joint contributions to an alarm.", vi: "Kiểm tra counterfactual sufficiency để phân biệt đóng góp của số, văn bản và cả hai vào cảnh báo." } },
    ],
    figures: [
      { src: "/research/anomaly-detection-method.webp", title: { en: "C-DLE architecture", vi: "Kiến trúc C-DLE" }, caption: { en: "Figure 2 · Leakage audit → detect → localize → explain. From the supplied manuscript, page 4.", vi: "Hình 2 · Audit rò rỉ → phát hiện → định vị → giải thích. Bản thảo gốc, trang 4." } },
      { src: "/research/anomaly-detection-results.webp", title: { en: "Detection & attribution", vi: "Phát hiện & quy thuộc" }, caption: { en: "Figures 4–5 and Table 6 · Robustness, cross-domain detection and attribution evidence. Manuscript page 7.", vi: "Hình 4–5 và Bảng 6 · Độ vững, phát hiện liên miền và bằng chứng attribution. Bản thảo, trang 7." } },
    ],
  },
  {
    slug: "iot-coverage", paperIndex: 2,
    heading: { en: "Beyond familiar devices.", vi: "Vượt khỏi thiết bị quen." },
    question: {
      en: "What attack-class miss rate can be promised on a physical IoT device absent from training? Pooling packet rows can hide how badly a detector performs on individual new devices.",
      vi: "Có thể bảo đảm tỷ lệ bỏ sót từng lớp tấn công nào trên thiết bị IoT chưa xuất hiện khi huấn luyện? Gộp các dòng packet có thể che khuất hiệu quả kém trên từng thiết bị mới.",
    },
    approach: {
      en: "Split by physical device, not packet row. Compare device-weighted class-conditional prediction sets with a device-quantile rule that controls the share of devices exceeding the tolerance.",
      vi: "Chia tập theo thiết bị vật lý thay vì dòng packet. So sánh prediction set có trọng số theo thiết bị và theo lớp với quy tắc device-quantile kiểm soát tỷ lệ thiết bị vượt tolerance.",
    },
    limitation: {
      en: "The bounds require exchangeability of devices. Calibration fleet size sets a hard resolution limit: 14 calibration devices cannot support the 5% target; adding packet rows does not remove that limitation.",
      vi: "Các cận yêu cầu tính exchangeability giữa thiết bị. Quy mô tập thiết bị hiệu chỉnh đặt giới hạn độ phân giải: 14 thiết bị chưa hỗ trợ target 5%; thêm dòng packet không loại bỏ giới hạn đó.",
    },
    takeaway: {
      en: "The unit of evaluation should match the unit of deployment. Calibrating for new hardware requires evidence across devices, not merely more traffic from familiar ones.",
      vi: "Đơn vị đánh giá cần khớp với đơn vị triển khai. Hiệu chỉnh cho phần cứng mới cần bằng chứng trên nhiều thiết bị, không chỉ thêm lưu lượng từ thiết bị đã quen.",
    },
    steps: [
      { title: { en: "Separate devices", vi: "Tách thiết bị" }, description: { en: "Partition 68 physical devices into 40 training, 14 calibration and 14 test devices.", vi: "Chia 68 thiết bị vật lý thành 40 thiết bị train, 14 calibration và 14 test." } },
      { title: { en: "Calibrate by class", vi: "Hiệu chỉnh theo lớp" }, description: { en: "Evaluate eight attack classes with five classifiers and four conformity scores.", vi: "Đánh giá tám lớp tấn công với năm classifier và bốn conformity score." } },
      { title: { en: "Check fleet coverage", vi: "Kiểm tra theo đội thiết bị" }, description: { en: "Compare average class coverage, device-level tolerance and prediction-set width.", vi: "So sánh coverage trung bình theo lớp, tolerance theo thiết bị và độ rộng prediction set." } },
    ],
    figures: [
      { src: "/research/iot-coverage-method.webp", title: { en: "Device-disjoint evaluation", vi: "Đánh giá tách biệt thiết bị" }, caption: { en: "Figure 2 · From mapping physical devices to device-level inference. Supplied manuscript, page 5.", vi: "Hình 2 · Từ ánh xạ thiết bị vật lý đến suy luận theo thiết bị. Bản thảo gốc, trang 5." } },
      { src: "/research/iot-coverage-results.webp", title: { en: "Coverage & set size", vi: "Coverage & kích thước tập" }, caption: { en: "Figure 4 · Class coverage, device tolerance and set size across calibration levels. Manuscript page 8.", vi: "Hình 4 · Coverage theo lớp, tolerance theo thiết bị và kích thước tập qua các mức hiệu chỉnh. Bản thảo, trang 8." } },
    ],
  },
  {
    slug: "bloom-forecasting", paperIndex: 3,
    heading: { en: "When more data misleads.", vi: "Khi nhiều dữ liệu gây nhiễu." },
    question: {
      en: "Does combining more data sources really improve cyanobacterial bloom warnings when monitoring is sparse and lake states persist? Retrospective alignment and weak incident definitions can make results look stronger than they are.",
      vi: "Kết hợp nhiều nguồn dữ liệu có thực sự cải thiện cảnh báo tảo nở hoa khi quan trắc thưa và trạng thái hồ kéo dài? Căn chỉnh hồi cứu và định nghĩa incident lỏng lẻo có thể làm kết quả tốt hơn thực tế.",
    },
    approach: {
      en: "Use a causal weekly benchmark across seven lakes and an untouched 2023–2024 holdout. An eight-gate audit checks availability, baselines, incident eligibility, paired inference, calibration, alert burden and preprocessing contracts.",
      vi: "Dùng benchmark theo tuần bảo đảm thứ tự thời gian trên bảy hồ và holdout 2023–2024 chưa chạm tới. Audit tám bước kiểm tra tính khả dụng, baseline, incident hợp lệ, suy luận ghép cặp, hiệu chỉnh, gánh nặng cảnh báo và quy tắc tiền xử lý.",
    },
    limitation: {
      en: "Only three incidents remain eligible after the provenance audit. The 14-day fusion benefit does not survive multiplicity control. These results support an evaluation audit, not a claim of operational warning efficacy.",
      vi: "Chỉ ba incident còn hợp lệ sau audit nguồn gốc. Lợi ích fusion ở 14 ngày không vượt kiểm soát đa kiểm định. Kết quả hỗ trợ quy trình audit đánh giá, chưa chứng minh hiệu quả cảnh báo vận hành.",
    },
    takeaway: {
      en: "A negative result can improve a system decision. Here, simpler target history is competitive, and apparent gains need to survive availability checks and an honest accounting of alert burden.",
      vi: "Kết quả âm vẫn giúp ra quyết định hệ thống tốt hơn. Ở đây, lịch sử target đơn giản có sức cạnh tranh; lợi ích biểu kiến cần vượt kiểm tra tính khả dụng và tính đầy đủ gánh nặng cảnh báo.",
    },
    steps: [
      { title: { en: "Respect availability", vi: "Kiểm tra tính khả dụng" }, description: { en: "Build weekly features with causal availability and reserve observed targets in the holdout.", vi: "Xây đặc trưng theo tuần đúng thời điểm khả dụng và giữ target quan trắc cho holdout." } },
      { title: { en: "Challenge fusion", vi: "Kiểm chứng fusion" }, description: { en: "Compare target history, persistence and fusion at 7- and 14-day horizons with paired inference.", vi: "So sánh lịch sử target, persistence và fusion ở horizon 7 và 14 ngày bằng suy luận ghép cặp." } },
      { title: { en: "Audit incidents", vi: "Audit incident" }, description: { en: "Trace apparent episode starts to eligible incidents and count the lake-weeks under warning.", vi: "Truy nguồn episode biểu kiến thành incident hợp lệ và đếm số tuần-hồ bị cảnh báo." } },
    ],
    figures: [
      { src: "/research/bloom-forecasting-method.webp", title: { en: "Eight-gate audit", vi: "Quy trình audit tám bước" }, caption: { en: "Figure 1 · Evidence-to-claim audit, from availability to interpretation. Supplied manuscript, page 5.", vi: "Hình 1 · Audit từ bằng chứng đến kết luận, từ tính khả dụng đến diễn giải. Bản thảo gốc, trang 5." } },
      { src: "/research/bloom-forecasting-results.webp", title: { en: "Observed-target holdout", vi: "Holdout target quan trắc" }, caption: { en: "Tables 2–3 · Data provenance and the 170-observation holdout comparison. Manuscript page 6.", vi: "Bảng 2–3 · Nguồn gốc dữ liệu và so sánh trên holdout 170 quan sát. Bản thảo, trang 6." } },
    ],
  },
];
