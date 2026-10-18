export const site = {
  name: "싱크24",
  tagline: "음식물처리기 AS · 이전설치 전문",
  description:
    "음식물처리기 AS, 이전설치 전문 싱크24. 칼날 교체, 막힘·소음·누수 점검, 철거 후 원상복구, 부품 판매까지 전 브랜드 취급. 문의 010-2193-2472",
  url: "https://www.sink24.com",
  phone: "010-2193-2472",
  blogUrl: "https://blog.naver.com/dsm9785",
};

export const telHref = `tel:${site.phone.replaceAll("-", "")}`;
export const smsHref = `sms:${site.phone.replaceAll("-", "")}`;

export const symptoms = [
  { title: "칼날이 돌지 않아요", body: "전원은 들어오는데 분쇄가 안 되거나 걸리는 느낌이 있을 때" },
  { title: "물이 잘 안 내려가요", body: "본체나 배관 막힘으로 싱크대에 물이 고일 때" },
  { title: "소리가 너무 커요", body: "작동 중 덜컹거림, 쇳소리 등 평소와 다른 소음이 날 때" },
  { title: "물이 새요", body: "본체 하부, 배수 연결부에서 누수가 보일 때" },
];

export const services = [
  {
    id: "repair",
    title: "고장 수리 · AS",
    body: "칼날 교체, 본체·배관 막힘, 소음, 누수 점검까지 증상에 맞춰 수리합니다.",
  },
  {
    id: "move",
    title: "이전설치",
    body: "이사 갈 때 쓰던 음식물처리기를 떼어 새 집 싱크대에 다시 설치해 드립니다.",
  },
  {
    id: "removal",
    title: "철거 · 원상복구",
    body: "처리기 철거 후 올스텐 배수통으로 싱크대 배수구를 원래 상태로 복구합니다.",
  },
  {
    id: "parts",
    title: "부품 단품 판매",
    body: "칼날, 배관 등 필요한 부품만 따로 구매하실 수 있습니다.",
  },
  {
    id: "tradein",
    title: "보상판매 상담",
    body: "오래된 처리기를 새 제품으로 바꾸실 때 보상판매를 상담해 드립니다.",
  },
  {
    id: "prevent",
    title: "배수 막힘 예방",
    body: "막히기 전에 관리하는 방법과 배관 세정제(펑크린) 사용을 안내해 드립니다.",
  },
] as const;

export const highlights = [
  { id: "brands", title: "전 브랜드 취급", body: "블랙홀부터 퀸코, 웰릭스까지" },
  { id: "reply", title: "30분 내 회신", body: "문자 주시면 빠르게 답장드립니다" },
  { id: "restore", title: "원상복구까지", body: "철거 후 올스텐 배수통 복구" },
  { id: "parts", title: "부품 단품 판매", body: "필요한 부품만 따로 구매" },
] as const;

export const brands = [
  "블랙홀",
  "블랙홀프리미엄",
  "블랙홀S",
  "퀸코",
  "그린퀸",
  "웰릭스",
  "싱크리더",
  "로운파워",
  "싱크퓨어",
  "엔비스",
  "KK디스포저",
  "몬스터프리미엄",
];

export const steps = [
  { title: "문자 · 전화 문의", body: "모델명과 증상을 보내주세요. 사진이 있으면 더 정확합니다." },
  { title: "상담 및 일정 조율", body: "문자 주시면 30분 내로 회신드리고 방문 일정을 잡습니다." },
  { title: "방문 작업", body: "현장에서 점검 후 수리 · 설치 · 철거를 진행합니다." },
];
