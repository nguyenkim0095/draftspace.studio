/**
 * HƯỚNG DẪN CẬP NHẬT DỰ ÁN:
 * 
 * 1. THÊM DỰ ÁN MỚI: 
 *    - Copy một object dự án hiện có và dán vào danh sách EN (tiếng Anh) và VI (tiếng Việt).
 *    - Đảm bảo 'id' là duy nhất và tăng dần.
 *    - Cập nhật các thông tin: title (tiêu đề), category (danh mục), year (năm), location (địa điểm).
 * 
 * 2. THAY ĐỔI ẢNH:
 *    - Thay đổi đường dẫn trong trường 'image' bằng URL ảnh mới của bạn.
 * 
 * 3. MÔ TẢ:
 *    - Cập nhật 'description' cho cả hai ngôn ngữ.
 *    - (Tùy chọn) Thêm 'intent' và 'intent2' để viết sâu hơn về ý đồ kiến trúc của dự án đó.
 */

import { ProjectData, Lang } from "../types";

export const PROJECTS: Record<Lang, ProjectData[]> = {
  EN: [
    {
      id: 1,
      title: "The Olwen Boutique Hotel",
      category: "Hospitality",
      year: "2025",
      location: "Da Nang, VN",
      images: [
        "https://i.postimg.cc/ncV0PY9z/Ba-ng-ve-1.webp",
        "https://i.postimg.cc/mZYvPKC8/bang-ve4-1.png",
        "https://i.postimg.cc/s2zSgQrQ/bang-ve6.png",
        "https://i.postimg.cc/mZYvPKC8/bang-ve4-1.png",
        "https://i.postimg.cc/XJwPmDbG/bang-ve3.png",
        "https://i.postimg.cc/JnwgTC90/bang-ve3-sao-che-p.png",
        "https://i.postimg.cc/Gmr6PKJb/bang-ve4-2.jpg",
        "https://i.postimg.cc/ZYpff3qS/bang-ve4-3.jpg",
        "https://i.postimg.cc/7ZYmYWn8/bang-ve4-4.jpg",
        "https://i.postimg.cc/JzYc73qS/bang-ve10.png",
        "https://i.postimg.cc/524n22M9/bang-ve4.png",
        "https://i.postimg.cc/kXrHqC4v/bang-ve5.png",
        "https://i.postimg.cc/gc3DyZz4/bang-ve7.png",
        "https://i.postimg.cc/MZ1D0Q6r/bang-ve8.png",
        "https://i.postimg.cc/ZKcx2zyJ/bang-ve9.png"
      ],
      description: "A seamless integration of indoor and outdoor living in the heart of the forest.",
      intent: "Departing from the slender technicality of traditional eaves, the project exaggerates the horizontal planes to create bold, cantilevered solids. This shift in scale establishes a true buffer zone, where deep shadows protect the glazing from direct solar radiation while carving out valuable veranda spaces.",
      intent2: "The horizontal planes act as tectonic layers, grounding the building’s mass with a sense of stability. The contrast between the solid masonry and the deep recesses of shadow allows the facade to evolve with the daylight, transforming the architecture into a living entity. The spirit of craftsmanship is embedded in the modular brickwork, meticulously arranged to form soft transitional curves that mitigate the heaviness of the large volumes. The raw texture of the terracotta dialogues with the greenery, tempering the structure’s rigorous geometry.",
      team: [
        { role: "Design & Architecture Team", 
        name: "Nguyen Kim, Nguyen Gia Hung, Nguyen Le Duy Vu" }
      ],
    },
    {
      id: 2,
      title: "The Dp Hotel",
      category: "Hospitality",
      year: "2024",
      location: "Tây Ninh, VN",
      images: [
        "https://i.postimg.cc/zXq5kTrz/1.jpg",
        "https://i.postimg.cc/9FX59Vdr/7.jpg",
        "https://i.postimg.cc/jjPk9k6y/17.jpg",
        "https://i.postimg.cc/jjPk9kHp/16.jpg",
        "https://i.postimg.cc/R0Kb8b1n/15.jpg",
        "https://i.postimg.cc/sXJHfQ0c/18.jpg",
        "https://i.postimg.cc/DfgRnD9v/11.jpg",
        "https://i.postimg.cc/fTRpLCsm/12.jpg",
        "https://i.postimg.cc/HsvK7MsC/13.jpg",
        "https://i.postimg.cc/XJWD0cxZ/14.jpg",
        "https://i.postimg.cc/nL9tLkvg/4.jpg",
        "https://i.postimg.cc/mg5sRqF6/5.jpg",
        "https://i.postimg.cc/W1HvjKJn/3.jpg",
        "https://i.postimg.cc/Sxvhq5zv/2.jpg",
        "https://i.postimg.cc/VvRxhH8n/8.jpg",
        "https://i.postimg.cc/cL6pDm5d/9.jpg",
        "https://i.postimg.cc/wxVngPC5/10.jpg",
        "https://i.postimg.cc/Y2zBjjWp/6.jpg",
        "https://i.postimg.cc/9FX59Vdr/7.jpg"
      ],
      description: "“making it work” is not about patchwork solutions, but about the art of optimization within limitation.",
      intent: "It was, ultimately, an intelligent compromise. Constrained by limited floor area, budget, and density pressure, the act of “working around” became a creative design strategy — one that sought a spatial resolution capable of achieving economic efficiency without sacrificing the proportions, atmosphere, and livability of the space.",
      intent2: "of the terracotta dialogues with the greenery, tempering the structure’s rigorous geometry.",
      team: [
        { role: "Draftspace x Hôm Architects",}
      ],
    },
    {
      id: 3,
      title: "The Olwen Boutique Hotel",
      category: "Hospitality",
      year: "2025",
      location: "Da Nang, VN",
      images: [
        "https://i.postimg.cc/ncV0PY9z/Ba-ng-ve-1.webp",
        "https://i.postimg.cc/mZYvPKC8/bang-ve4-1.png",
        "https://i.postimg.cc/s2zSgQrQ/bang-ve6.png",
        "https://i.postimg.cc/mZYvPKC8/bang-ve4-1.png",
        "https://i.postimg.cc/XJwPmDbG/bang-ve3.png",
        "https://i.postimg.cc/JnwgTC90/bang-ve3-sao-che-p.png",
        "https://i.postimg.cc/Gmr6PKJb/bang-ve4-2.jpg",
        "https://i.postimg.cc/ZYpff3qS/bang-ve4-3.jpg",
        "https://i.postimg.cc/7ZYmYWn8/bang-ve4-4.jpg",
        "https://i.postimg.cc/JzYc73qS/bang-ve10.png",
        "https://i.postimg.cc/524n22M9/bang-ve4.png",
        "https://i.postimg.cc/kXrHqC4v/bang-ve5.png",
        "https://i.postimg.cc/gc3DyZz4/bang-ve7.png",
        "https://i.postimg.cc/MZ1D0Q6r/bang-ve8.png",
        "https://i.postimg.cc/ZKcx2zyJ/bang-ve9.png"
      ],
      description: "A seamless integration of indoor and outdoor living in the heart of the forest.",
      intent: "Departing from the slender technicality of traditional eaves, the project exaggerates the horizontal planes to create bold, cantilevered solids. This shift in scale establishes a true buffer zone, where deep shadows protect the glazing from direct solar radiation while carving out valuable veranda spaces.",
      intent2: "The horizontal planes act as tectonic layers, grounding the building’s mass with a sense of stability. The contrast between the solid masonry and the deep recesses of shadow allows the facade to evolve with the daylight, transforming the architecture into a living entity. The spirit of craftsmanship is embedded in the modular brickwork, meticulously arranged to form soft transitional curves that mitigate the heaviness of the large volumes. The raw texture of the terracotta dialogues with the greenery, tempering the structure’s rigorous geometry.",
      team: [
        { role: "Design & Architecture Team", 
        name: "Nguyen Kim, Nguyen Gia Hung, Nguyen Le Duy Vu" }
      ],
    }
  ],
  VI: [
    {
      id: 1,
      title: "The Olwen Boutique Hotel",
      category: "Hospitality",
      year: "2025",
      location: "Đà Nẵng, VN",
      images: [
        "https://i.postimg.cc/ncV0PY9z/Ba-ng-ve-1.webp",
        "https://i.postimg.cc/mZYvPKC8/bang-ve4-1.png",
        "https://i.postimg.cc/s2zSgQrQ/bang-ve6.png",
        "https://i.postimg.cc/mZYvPKC8/bang-ve4-1.png",
        "https://i.postimg.cc/XJwPmDbG/bang-ve3.png",
        "https://i.postimg.cc/JnwgTC90/bang-ve3-sao-che-p.png",
        "https://i.postimg.cc/Gmr6PKJb/bang-ve4-2.jpg",
        "https://i.postimg.cc/ZYpff3qS/bang-ve4-3.jpg",
        "https://i.postimg.cc/7ZYmYWn8/bang-ve4-4.jpg",
        "https://i.postimg.cc/JzYc73qS/bang-ve10.png",
        "https://i.postimg.cc/524n22M9/bang-ve4.png",
        "https://i.postimg.cc/kXrHqC4v/bang-ve5.png",
        "https://i.postimg.cc/gc3DyZz4/bang-ve7.png",
        "https://i.postimg.cc/MZ1D0Q6r/bang-ve8.png",
        "https://i.postimg.cc/ZKcx2zyJ/bang-ve9.png"
      ],
      description: "Sự chuyển tiếp mượt mà giữa không gian sống trong nhà và ngoài trời giữa lòng rừng xanh.",
      intent: "Kiến trúc như một quá trình nghiên cứu. Chúng tôi khám phá ranh giới giữa vật liệu truyền thống và hình khối hiện đại, tập trung vào cách ánh sáng mặt trời tương tác với các bề mặt thô mộc suốt cả ngày.",
      intent2: "Cốt lõi của thiết kế nằm ở sự tối giản có hệ thống—loại bỏ những chi tiết trang trí không cần thiết để làm nổi bật hình học thuần khiết và logic cấu trúc của không gian.",
      team: [
        { role: "Chủ trì", name: "N. Kim" },
        { role: "Kết cấu", name: "L. Tran" },
        { role: "Kỹ thuật", name: "K. Nguyen" }
      ],
      drawings: ["MẶT_BẰNG_TỔNG_THỂ_01", "MẶT_CẮT_AA_02"]
    },
    {
      id: 2,
      title: "The Dp Hotel",
      category: "Hospitality",
      year: "2024",
      location: "TP.HCM, VN",
      images: [
        "https://picsum.photos/seed/dp1/1200/800",
        "https://picsum.photos/seed/dp2/1200/800"
      ],
      description: "Định nghĩa lại cảnh quan thành phố với vẻ đẹp thô mộc và vật liệu bền vững."
    },
    {
      id: 3,
      title: "The Olwen Boutique Hotel",
      category: "Hospitality",
      year: "2025",
      location: "Đà Nẵng, VN",
      images: [
        "https://i.postimg.cc/ncV0PY9z/Ba-ng-ve-1.webp",
        "https://i.postimg.cc/mZYvPKC8/bang-ve4-1.png",
        "https://i.postimg.cc/s2zSgQrQ/bang-ve6.png",
        "https://i.postimg.cc/mZYvPKC8/bang-ve4-1.png",
        "https://i.postimg.cc/XJwPmDbG/bang-ve3.png",
        "https://i.postimg.cc/JnwgTC90/bang-ve3-sao-che-p.png",
        "https://i.postimg.cc/Gmr6PKJb/bang-ve4-2.jpg",
        "https://i.postimg.cc/ZYpff3qS/bang-ve4-3.jpg",
        "https://i.postimg.cc/7ZYmYWn8/bang-ve4-4.jpg",
        "https://i.postimg.cc/JzYc73qS/bang-ve10.png",
        "https://i.postimg.cc/524n22M9/bang-ve4.png",
        "https://i.postimg.cc/kXrHqC4v/bang-ve5.png",
        "https://i.postimg.cc/gc3DyZz4/bang-ve7.png",
        "https://i.postimg.cc/MZ1D0Q6r/bang-ve8.png",
        "https://i.postimg.cc/ZKcx2zyJ/bang-ve9.png"
      ],
      description: "Sự chuyển tiếp mượt mà giữa không gian sống trong nhà và ngoài trời giữa lòng rừng xanh.",
      intent: "Kiến trúc như một quá trình nghiên cứu. Chúng tôi khám phá ranh giới giữa vật liệu truyền thống và hình khối hiện đại, tập trung vào cách ánh sáng mặt trời tương tác với các bề mặt thô mộc suốt cả ngày.",
      intent2: "Cốt lõi của thiết kế nằm ở sự tối giản có hệ thống—loại bỏ những chi tiết trang trí không cần thiết để làm nổi bật hình học thuần khiết và logic cấu trúc của không gian.",
      team: [
        { role: "Chủ trì", name: "N. Kim" },
        { role: "Kết cấu", name: "L. Tran" },
        { role: "Kỹ thuật", name: "K. Nguyen" }
      ],
      drawings: ["MẶT_BẰNG_TỔNG_THỂ_01", "MẶT_CẮT_AA_02"]
    }
  ]
};
