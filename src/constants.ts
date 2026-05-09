import { ProjectData, Translation, Lang } from "./types";

export const PROJECTS: Record<Lang, ProjectData[]> = {
  EN: [
    {
      id: 1,
      title: "The Glass Pavilion",
      category: "Residential",
      year: "2024",
      location: "Da Nang, VN",
      image: "https://picsum.photos/seed/arch1/1200/800",
      description: "A seamless integration of indoor and outdoor living in the heart of the forest."
    },
    {
      id: 2,
      title: "Urban Monolith",
      category: "Commercial",
      year: "2023",
      location: "Saigon, VN",
      image: "https://picsum.photos/seed/arch2/1200/800",
      description: "Redefining the cityscape with brutalist elegance and sustainable materials."
    },
    {
      id: 3,
      title: "The Atrium House",
      category: "Residential",
      year: "2023",
      location: "Tay Ninh, VN",
      image: "https://picsum.photos/seed/arch3/1200/800",
      description: "Centering life around a curated micro-climate and natural light paths."
    },
    {
      id: 4,
      title: "Zenith Tower",
      category: "Concept",
      year: "2025",
      location: "Saigon, VN",
      image: "https://picsum.photos/seed/arch4/1200/800",
      description: "A conceptual exploration of vertical gardens and modular living units."
    },
    {
      id: 5,
      title: "Obsidian Retreat",
      category: "Residential",
      year: "2024",
      location: "Da Lat, VN",
      image: "https://picsum.photos/seed/arch5/1200/800",
      description: "Capturing the mood of the Highlands through dark textures and expansive openings."
    },
    {
      id: 6,
      title: "Lumina Gallery",
      category: "Public",
      year: "2024",
      location: "Hanoi, VN",
      image: "https://picsum.photos/seed/arch6/1200/800",
      description: "A dialogue between light and void, creating a sanctuary for contemporary art."
    }
  ],
  VI: [
    {
      id: 1,
      title: "The Glass Pavilion",
      category: "Residential",
      year: "2024",
      location: "Đà Nẵng, VN",
      image: "https://picsum.photos/seed/arch1/1200/800",
      description: "Sự chuyển tiếp mượt mà giữa không gian sống trong nhà và ngoài trời giữa lòng rừng xanh."
    },
    {
      id: 2,
      title: "Urban Monolith",
      category: "Commercial",
      year: "2023",
      location: "TP.HCM, VN",
      image: "https://picsum.photos/seed/arch2/1200/800",
      description: "Định nghĩa lại cảnh quan thành phố với vẻ đẹp thô mộc và vật liệu bền vững."
    },
    {
      id: 3,
      title: "The Atrium House",
      category: "Residential",
      year: "2023",
      location: "Tây Ninh, VN",
      image: "https://picsum.photos/seed/arch3/1200/800",
      description: "Tập trung không gian sống quanh những luồng sáng tự nhiên và tiểu khí hậu chọn lọc."
    },
    {
      id: 4,
      title: "Zenith Tower",
      category: "Concept",
      year: "2025",
      location: "TP.HCM, VN",
      image: "https://picsum.photos/seed/arch4/1200/800",
      description: "Một nghiên cứu ý tưởng về vườn treo thẳng đứng và các đơn vị sống mô-đun."
    },
    {
      id: 5,
      title: "Obsidian Retreat",
      category: "Residential",
      year: "2024",
      location: "Đà Lạt, VN",
      image: "https://picsum.photos/seed/arch5/1200/800",
      description: "Ghi lại nhịp điệu của Cao nguyên thông qua các khối đen và khoảng mở rộng lớn."
    },
    {
      id: 6,
      title: "Lumina Gallery",
      category: "Public",
      year: "2024",
      location: "Hà Nội, VN",
      image: "https://picsum.photos/seed/arch6/1200/800",
      description: "Cuộc đối thoại giữa ánh sáng và hư vô, tạo nên thánh đường cho nghệ thuật đương đại."
    }
  ]
};

export const TRANSLATIONS: Record<Lang, Translation> = {
  EN: {
    nav: ["Works", "About", "Services"],
    heroTitle: ["Systematic", "Simplicity."],
    heroSub: "Architectural practice focused on high-performance structures and minimalist residential interventions. Exploring the density of space.",
    selectedWorks: "Selected Works",
    archive: "Archive 2023—2024",
    profile: "Profile",
    bio: "Founded in 2018, draftspace Studio is an architectural practice committed to the rigorous investigation of geometric form and material honesty. We operate between regional contexts and global standards, seeking clarity in every gesture.",
    team: "Our team consists of architects, engineers, and designers who believe that high-performance design is the only way forward.",
    philosophies: [
      { t: "Clarity", d: "Stripping away the non-essential to reveal the core architectural intent." },
      { t: "Performance", d: "Utilizing advanced modeling to optimize structural and environmental response." },
      { t: "Materiality", d: "Honoring the inherent properties of stone, steel, and timber." }
    ],
    serviceDetails: [
      { t: "Architecture", d: "Full-scale architectural design from concept to completion, focusing on sustainable monoliths." },
      { t: "Interiors", d: "Curated interior environments that extend the architectural language inward." },
      { t: "Product", d: "Bespoke furniture and lighting systems designed specifically for our built projects." }
    ],
    otherServices: [
      { t: "Branding", d: "Crafting visual identities that resonate with the architectural mood." },
      { t: "Website", d: "Digital experiences that translate spatial logic into the virtual realm." },
      { t: "Logos & Graphics", d: "Graphic systems developed in parallel with project documentation." }
    ],
    contactInfo: {
      address: "124 Ton Dat Tien, District 7, Ho Chi Minh City",
      phone: "+84 (0) 28 3823 1111",
      email: "hello@draftspace.studio"
    },
    back: "Back to Home",
    projectStats: ["Year", "Location", "Category", "Status"],
    status: ["Completed", "Under Construction", "Concept"],
    newProjects: "New Projects",
    studioImg: "STUDIO IMAGE",
    teamIntroduction: "Founded on a shared love for geometric clarity, our studio is more than just a workplace—it's a gathering of minds where every sketch is a conversation and every detail matters. We believe that the best architectural stories are told together, one precise line at a time."
  },
  VI: {
    nav: ["Dự án", "Giới thiệu", "Dịch vụ"],
    heroTitle: ["Systematic", "Simplicity."],
    heroSub: "Văn phòng kiến trúc tập trung vào các cấu trúc hiệu suất cao và các can thiệp nhà ở tối giản. Nghiên cứu mật độ của không gian.",
    selectedWorks: "Dự án Tiêu biểu",
    archive: "Lưu trữ 2023—2024",
    profile: "Hồ sơ",
    bio: "Được thành lập vào năm 2018, draftspace Studio là một văn phòng kiến trúc cam kết nghiên cứu nghiên cứu hình khối và tính chân thực của vật liệu. Chúng tôi hoạt động giữa bối cảnh khu vực và tiêu chuẩn toàn cầu, tìm kiếm sự rõ ràng trong từng chi tiết.",
    team: "Đội ngũ của chúng tôi bao gồm các kiến trúc sư, kỹ sư và nhà thiết kế tin rằng thiết kế hiệu suất cao là con đường duy nhất phía trước.",
    philosophies: [
      { t: "Sự rõ ràng", d: "Loại bỏ những thứ không cần thiết để làm nổi bật ý đồ kiến trúc cốt lõi." },
      { t: "Hiệu suất", d: "Sử dụng mô hình tiên tiến để tối ưu hóa cấu trúc và phản ứng môi trường." },
      { t: "Vật liệu", d: "Tôn trọng các đặc tính vốn có của đá, thép và gỗ." }
    ],
    serviceDetails: [
      { t: "Kiến trúc", d: "Thiết kế kiến trúc toàn diện từ ý tưởng đến khi hoàn thiện, tập trung vào các khối bền vững." },
      { t: "Nội thất", d: "Môi trường nội thất được chọn lọc nhằm mở rộng ngôn ngữ kiến trúc vào bên trong." },
      { t: "Sản phẩm", d: "Nội thất và hệ thống chiếu sáng bespoke được thiết kế riêng cho các dự án xây dựng của chúng tôi." }
    ],
    otherServices: [
       { t: "Thương hiệu", d: "Xây dựng bản sắc thị giác cộng hưởng với tinh thần kiến trúc." },
       { t: "Website", d: "Trải nghiệm kỹ thuật số chuyển dịch logic không gian vào thế giới ảo." },
       { t: "Logo & Đồ họa", d: "Hệ thống đồ họa được phát triển song song với hồ sơ dự án." }
    ],
    contactInfo: {
      address: "124 Tôn Dật Tiên, Quận 7, TP. Hồ Chí Minh",
      phone: "+84 (0) 28 3823 1111",
      email: "hello@draftspace.studio"
    },
    back: "Quay lại",
    projectStats: ["Năm", "Địa điểm", "Hạng mục", "Trạng thái"],
    status: ["Hoàn thành", "Đang thi công", "Ý tưởng"],
    newProjects: "Dự án mới",
    studioImg: "HÌNH ẢNH STUDIO",
    teamIntroduction: "Được dựng xây từ niềm đam mê chung với hình khối và sự rõ ràng, studio của chúng tôi không chỉ là nơi làm việc mà còn là nơi giao thoa của những tâm hồn đồng điệu. Chúng tôi tin rằng những câu chuyện kiến trúc tuyệt vời nhất luôn được viết tiếp bằng sự thấu hiểu và tỉ mỉ trong từng nét vẽ."
  }
};
