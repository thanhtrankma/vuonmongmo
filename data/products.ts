import { Product } from '@/types/product'

export const products: Product[] = [
  {
    id: '1',
    name: 'Hoa Mộng Mơ',
    title: 'Hoa Mộng Mơ – Khoảnh Khắc Dịu Dàng Trong Khu Vườn Nhỏ',
    description:
      'Giữa khu vườn tĩnh lặng, một bông hoa mềm mại khẽ rung rinh trong làn gió nhẹ. "Hoa Mộng Mơ" kể câu chuyện về những phút giây dịu dàng, nơi ánh nến phủ lên không gian một sắc hồng ấm áp, nhắc ta nhớ rằng yêu thương có thể nở hoa từ những điều nhỏ bé nhất. Mùi hương nhẹ nhàng như tấm chăn mềm, ôm trọn cảm xúc đang cần được vỗ về. Mỗi lần thắp nến, bạn như được đưa về những ngày bình yên, nơi bầu trời trong vắt và những giấc mơ được thủ thỉ bên tai. Ánh sáng êm dịu giúp bạn thả lỏng, lắng nghe trái tim mình và giữ lại những điều đẹp đẽ nhất.',
    price: 500000,
    image: '/images/nang_mong_mo/nang_mong_mo.jpg',
    images: [
      '/images/nang_mong_mo/nang_mong_mo.jpg',
      '/images/nang_mong_mo/nang_mong_mo.jpg',
    ],
    category: 'hoa',
    inStock: true,
  },
  {
    id: '2',
    name: 'Gai Dịu Dàng',
    title: 'Gai Dịu Dàng – Món Quà Của Sự Kiên Cường Và Yêu Thương',
    description:
      'Trong một khu vườn nhỏ giữa lòng sa mạc, nơi cát vàng trải dài và nắng gió khắc nghiệt, những cây xương rồng vẫn vươn mình mạnh mẽ. Chúng khoác lên mình lớp gai nhọn, nhưng bên trong lại tràn đầy sức sống, từng ngày chắt chiu nước để nở hoa rực rỡ.\n\n"Gai Dịu Dàng" là câu chuyện của những tâm hồn mạnh mẽ – những con người bên ngoài có thể cứng cỏi, nhưng bên trong lại chan chứa yêu thương. Dù cuộc sống có thử thách, họ vẫn dịu dàng với những người xung quanh, vẫn lặng lẽ tỏa sáng như ngọn nến nhỏ sưởi ấm không gian.\n\n✨ Món quà này dành cho ai?\nNgười bạn thân luôn là chỗ dựa vững chắc nhưng cũng đầy ấm áp.\nNgười yêu thương dù không giỏi thể hiện cảm xúc, nhưng luôn âm thầm quan tâm.\nChính bạn, như một lời nhắc nhở: Dù cuộc sống có gai góc, hãy luôn dịu dàng với chính mình.\nKhi thắp lên Gai Dịu Dàng, ánh nến lung linh như nhắn nhủ rằng: Đừng ngại che chở trái tim mình, nhưng cũng đừng quên rằng bạn có quyền tỏa sáng, theo cách rất riêng. 💚',
    price: 500000,
    image: '/images/gai_diu_dang/gai_diu_dang.jpg',
    images: [
      '/images/gai_diu_dang/gai_diu_dang.jpg',
      '/images/gai_diu_dang/gai_diu_dang.jpg',
    ],
    category: 'xương-rồng',
    inStock: true,
  },
  {
    id: '3',
    name: 'Vườn Xanh',
    title: 'Vườn Xanh – Hơi Thở Bình Yên Giữa Những Ngày Vội Vã',
    description:
      'Một thảm rêu mềm phủ xanh góc vườn, nơi tiếng lá khẽ chạm vào nhau tạo nên bản nhạc dịu êm. "Vườn Xanh" mang đến cảm giác mát lành và bình yên, như một khoảng dừng nhỏ giữa nhịp sống hối hả. Khi ánh nến lan tỏa, mùi hương tự nhiên giúp bạn thả lỏng, tìm lại sự cân bằng và nhẹ nhõm trong từng hơi thở. Đó là khoảnh khắc bạn được phép chậm lại, đặt xuống những âu lo và lắng nghe nhịp thở của chính mình. Ngọn nến xanh mát giống như một khu vườn thu nhỏ, luôn sẵn sàng dang tay ôm trọn mọi cảm xúc, trả lại cho bạn một tâm hồn nhẹ nhàng và tươi mới.',
    price: 450000,
    image: '/images/vuon_xanh/vuon_xanh.png',
    images: [
      '/images/vuon_xanh/vuon_xanh.png',
    ],
    category: 'rêu',
    inStock: true,
  },
  {
    id: '4',
    name: 'Hoa Hồng Lãng Mạn',
    title: 'Hoa Hồng Lãng Mạn – Lời Thì Thầm Của Yêu Thương',
    description:
      'Một bông hồng hé nở trong ánh nến vàng ấm, dịu dàng như lời thì thầm của yêu thương. "Hoa Hồng Lãng Mạn" gợi nhớ những khoảnh khắc ngọt ngào, những cái siết tay nhẹ và ánh mắt đầy trìu mến. Hương thơm quyến rũ mà tinh tế, vừa đủ để không gian trở nên ấm áp, vừa đủ để trái tim thấy mình được nâng niu. Mỗi lần thắp nến, bạn như được đưa trở lại những buổi hẹn hò đầu tiên, những lần chờ mong và những phút giây chạm tay bối rối. Ánh nến nhẹ nhàng giữ lại dư vị ngọt ngào, để tình yêu có thêm một ngôn ngữ thầm lặng nhưng trọn vẹn.',
    price: 550000,
    image: '/images/hoa_hong_lang_man/hoa_hong_lang_man.jpg',
    images: [
      '/images/hoa_hong_lang_man/hoa_hong_lang_man.jpg',
    ],
    category: 'hoa',
    inStock: true,
  },
]

