"use client";

import Image from "next/image";
import { useState } from "react";
import type { Language } from "../portfolio-data";

export const ojtCertificate =
  "/certifications/HuynhQuocViet-SE194225-ChúngchỉOJT-OJT268336-28102026.pdf";
const researchFolder =
  "https://drive.google.com/drive/folders/1dJfnrnmMCvTFRUxuEnr0aXmnh3AsJClG";
const companyLink =
  "https://thuvienphapluat.vn/ma-so-thue/cong-ty-co-phan-giai-phap-tong-the-ky-nguyen-so-mst-0311357436.html";
const learningTracks = [
  {
    name: "Class",
    title: "Federated Class Continual Learning",
    en: "Study how distributed clients learn new classes over time while retaining knowledge of earlier classes.",
    vi: "Nghiên cứu cách các client phân tán học thêm lớp mới theo thời gian và giữ kiến thức về các lớp trước.",
    example: {
      en: "New classes → retain earlier classes",
      vi: "Lớp mới → giữ kiến thức lớp cũ",
    },
  },
  {
    name: "Domain",
    title: "Federated Domain Continual Learning",
    en: "Study adaptation when data distributions change across clients or over time, while the prediction task remains the same.",
    vi: "Nghiên cứu thích nghi khi phân phối dữ liệu thay đổi giữa các client hoặc theo thời gian, trong khi bài toán dự đoán giữ nguyên.",
    example: {
      en: "New conditions → adapt the same task",
      vi: "Điều kiện mới → thích nghi cùng bài toán",
    },
  },
  {
    name: "Task",
    title: "Federated Task Continual Learning",
    en: "Study sequential tasks across distributed clients and how learning transfers without erasing earlier task knowledge.",
    vi: "Nghiên cứu các nhiệm vụ tuần tự trên client phân tán và cách chuyển giao việc học mà không xóa kiến thức nhiệm vụ trước.",
    example: {
      en: "New tasks → preserve earlier skills",
      vi: "Nhiệm vụ mới → giữ kỹ năng trước",
    },
  },
] as const;

export default function ExperienceSection({
  language,
}: {
  language: Language;
}) {
  const [track, setTrack] = useState(0);
  const selected = learningTracks[track];
  const vi = language === "vi";

  return (
    <section
      id="experience"
      className="page-section surface-ink content-auto"
      aria-labelledby="experience-title"
    >
      <div className="site-shell">
        <div className="section-intro">
          <h2 id="experience-title">
            {vi ? "Kinh nghiệm làm việc." : "Research & work experience."}
          </h2>
          <p>
            {vi
              ? "Nghiên cứu tại SpeedyLabX, đánh giá AI hội thoại tiếng Việt trên Outlier và kỳ OJT về học liên kết, AI tại biên."
              : "Research at SpeedyLabX, Vietnamese conversational AI evaluation on Outlier, and an OJT in federated learning and edge AI."}
          </p>
        </div>

        <div className="experience-list">
          <article className="experience-entry">
            <div className="experience-identity">
              <div className="experience-logo">
                <Image
                  src="/certifications/outlier.png"
                  alt="Outlier · Project Aether"
                  width={800}
                  height={500}
                  sizes="(max-width: 680px) 50vw, 22vw"
                />
              </div>
              <p className="experience-period">
                <time dateTime="2026-06-06">06/06/2026</time> —{" "}
                <time dateTime="2026-10">10/2026</time>
              </p>
              <p>{vi ? "Freelance qua Upwork · Đã kết thúc" : "Freelance via Upwork · Completed"}</p>
            </div>
            <div className="experience-copy">
              <h3>Outlier</h3>
              <p className="experience-company">Project Aether</p>
              <p className="experience-role">Contributor · {vi ? "Đánh giá AI tiếng Việt" : "Vietnamese AI Evaluation"}</p>
              <p>
                {vi
                  ? "Làm việc freelance qua Upwork với vai trò Contributor: gán nhãn, kiểm tra dữ liệu và đánh giá các mô hình AI qua hội thoại tiếng Việt."
                  : "Worked as a freelance Contributor through Upwork, labelling and validating data and evaluating AI models through Vietnamese conversations."}
              </p>
              <ul className="evidence-list">
                <li>{vi
                  ? "Gán nhãn và xác thực dữ liệu theo hướng dẫn của task."
                  : "Labelled and validated data against task guidelines."}</li>
                <li>{vi
                  ? "Trò chuyện bằng giọng nói với hai mô hình AI, so sánh và đánh giá phản hồi trong quá trình hội thoại."
                  : "Held spoken conversations with two AI models, comparing and evaluating their responses throughout the exchange."}</li>
              </ul>
              <div className="evaluation-rubric">
                <h4>{vi ? "Bốn tiêu chí đánh giá" : "Four evaluation criteria"}</h4>
                <ul>
                  <li>Audio Quality</li>
                  <li>Naturalness / Engagement</li>
                  <li>Utility</li>
                  <li>Conversation Dynamics</li>
                </ul>
              </div>
              <a href="https://outlier.ai/" target="_blank" rel="noreferrer" className="inline-link">
                {vi ? "Tìm hiểu về Outlier" : "About Outlier"} ↗
              </a>
            </div>
          </article>
          <article className="experience-entry">
            <div className="experience-identity">
              <div className="experience-logo">
                <Image
                  src="/certifications/speedylabx.jpg"
                  alt="SpeedyLabX"
                  width={750}
                  height={750}
                  sizes="(max-width: 680px) 50vw, 22vw"
                />
              </div>
              <p className="experience-period">
                <time dateTime="2025-11-05">05/11/2025</time> —{" "}
                {vi ? "Hiện tại" : "Present"}
              </p>
              <p className="experience-current">
                {vi ? "Đang làm việc" : "Ongoing"}
              </p>
            </div>
            <div className="experience-copy">
              <h3>SpeedyLabX</h3>
              <p className="experience-role">
                AI Tech Lead · {vi ? "Nghiên cứu AI" : "AI Research"}
              </p>
              <p>
                {vi
                  ? "Học tập, làm việc và nghiên cứu các bài báo khoa học; tham gia phát triển hướng nghiên cứu và chuẩn bị bản thảo để nộp hội nghị."
                  : "Learning, working and studying scientific papers; developing research directions and preparing manuscripts for conference submission."}
              </p>
              <ul className="evidence-list">
                <li>
                  {vi
                    ? "Đọc và phân tích phương pháp, thiết kế đánh giá và giới hạn của các công trình liên quan."
                    : "Read and analyse methods, evaluation designs and limitations in related work."}
                </li>
                <li>
                  {vi
                    ? "Nghiên cứu các chủ đề AI được trình bày trong portfolio: chuỗi thời gian, phát hiện bất thường, conformal prediction và đánh giá khả năng tái lập."
                    : "Explore the AI topics documented in this portfolio: time series, anomaly detection, conformal prediction and reproducibility."}
                </li>
                <li>
                  {vi
                    ? "Hệ thống hóa bằng chứng và kết quả thí nghiệm phục vụ viết paper và trao đổi học thuật."
                    : "Organise evidence and experimental results for paper writing and scientific discussion."}
                </li>
              </ul>
              <a href="#research" className="inline-link">
                {vi ? "Khám phá các nghiên cứu" : "Explore the research"}{" "}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>

          <article className="experience-entry">
            <div className="experience-identity">
              <a
                href={ojtCertificate}
                target="_blank"
                rel="noreferrer"
                className="experience-certificate"
                aria-label={
                  vi
                    ? "Mở chứng chỉ hoàn thành OJT"
                    : "Open OJT completion certificate"
                }
              >
                <Image
                  src="/certifications/ojt-certificate.webp"
                  alt={
                    vi
                      ? "Chứng chỉ OJT của Huỳnh Quốc Việt do Đại học FPT cấp"
                      : "FPT University OJT certificate awarded to Huynh Quoc Viet"
                  }
                  width={1200}
                  height={850}
                  sizes="(max-width: 680px) 92vw, 28vw"
                />
                <span>
                  {vi ? "Xem chứng chỉ OJT" : "View OJT certificate"} ↗
                </span>
              </a>
              <p className="experience-period">
                <time dateTime="2026-01-05">05/01/2026</time> —{" "}
                <time dateTime="2026-05-10">10/05/2026</time>
              </p>
              <p>
                {vi
                  ? "Thực tập · Đại học FPT"
                  : "On the Job Training · FPT University"}
              </p>
            </div>
            <div className="experience-copy">
              <h3>Kỷ Nguyên Số</h3>
              <p className="experience-company">
                Công ty Cổ phần Giải pháp Tổng thể Kỷ Nguyên Số
              </p>
              <p className="experience-role">
                {vi
                  ? "Thực tập sinh nghiên cứu AI · OJT"
                  : "AI Research Intern · OJT"}
              </p>
              <p>
                {vi
                  ? "Nghiên cứu các phương pháp học trên dữ liệu phân tán và thay đổi theo thời gian, với trọng tâm là Federated Learning (FL), Continual Learning (CL), Federated Continual Learning (FCL), Edge Computing và Edge AI."
                  : "Studied learning from distributed data that evolves over time, focusing on Federated Learning (FL), Continual Learning (CL), Federated Continual Learning (FCL), Edge Computing and Edge AI."}
              </p>
              <p>
                {vi
                  ? "Tài liệu nghiên cứu gồm ghi chú đọc paper và tổng hợp ứng dụng FCL trong giao thông thông minh, y tế, IoT và mạng UAV; xem xét tính không đồng nhất dữ liệu, quên kiến thức và giới hạn tài nguyên tại biên."
                  : "Research materials include paper-reading notes and a review of FCL applications in intelligent transportation, healthcare, IoT and UAV networks, considering data heterogeneity, forgetting and edge resource constraints."}
              </p>

              <div className="learning-explorer">
                <p className="learning-heading">
                  {vi
                    ? "Ba hướng nghiên cứu FCL"
                    : "Three FCL research directions"}
                </p>
                <div
                  className="learning-controls"
                  role="group"
                  aria-label={
                    vi ? "Chọn hướng nghiên cứu" : "Choose a research direction"
                  }
                >
                  {learningTracks.map((item, index) => (
                    <button
                      key={item.name}
                      type="button"
                      aria-pressed={track === index}
                      aria-controls="learning-description"
                      onClick={() => setTrack(index)}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
                <div
                  id="learning-description"
                  className="learning-description"
                  aria-live="polite"
                >
                  <h4>{selected.title}</h4>
                  <p>{selected[language]}</p>
                  <p className="learning-example">
                    {selected.example[language]}
                  </p>
                </div>
              </div>
              <div className="research-actions">
                <a
                  href={researchFolder}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-link"
                >
                  {vi
                    ? "Tài liệu nghiên cứu trên Drive"
                    : "Research notes on Drive"}{" "}
                  ↗
                </a>
                <a
                  href={companyLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-link"
                >
                  {vi ? "Thông tin công ty" : "Company details"}
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
