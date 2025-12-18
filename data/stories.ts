export type CandleStory = {
  slug: string
  title: string
  subtitle?: string
  relatedProductId?: string
  coverImage?: string
  excerpt: string
  content: string
}

export const candleStories: CandleStory[] = [
  {
    slug: 'gai-diu-dang',
    title: 'Gai Dịu Dàng',
    subtitle: 'Câu chuyện về một khu vườn nhỏ giữa lòng sa mạc',
    relatedProductId: '2',
    coverImage: '/images/gai_diu_dang/gai_diu_dang.jpg',
    excerpt:
      'Giữa sa mạc nắng gắt, một khu vườn nhỏ vẫn âm thầm xanh. Ở đó có những chiếc gai tưởng chừng sắc lạnh, nhưng lại che chở cho những bông hoa mềm nhất.',
    content:
      'Người ta vẫn thường nghĩ rằng, những điều dịu dàng phải đi cùng vẻ ngoài mềm mại. Nhưng ở khu vườn nhỏ giữa lòng sa mạc kia, dịu dàng lại mang hình hài của những chiếc gai.\n\nCó một cây xương rồng đứng nơi góc vườn, bao quanh là lớp gai nhọn tưởng chừng khó lại gần. Mỗi ngày, nó lặng lẽ hứng ánh nắng gay gắt, giữ từng giọt nước quý giá trong thân mình. Người qua đường chỉ thấy vẻ ngoài cứng cỏi, chẳng ai biết bên trong là cả một thế giới kiên cường mà ấm áp.\n\nMột buổi chiều, chủ khu vườn đặt bên cạnh nó một chiếc cốc nến nhỏ. Ngọn lửa đầu tiên được thắp lên, hương thơm nhẹ nhàng lan tỏa, soi sáng những chiếc gai lấp lánh dưới ánh vàng. Xương rồng bỗng thấy mình được nhìn bằng một ánh mắt khác – không còn là sự sợ hãi, mà là sự trân trọng.\n\n"Gai Dịu Dàng" được sinh ra từ khoảnh khắc ấy – dành cho những tâm hồn mạnh mẽ, chọn cách yêu thương theo cách ít ồn ào hơn. Với những người luôn gồng mình bảo vệ người khác, ánh nến này như một lời nhắc khẽ: bạn có quyền được mềm yếu, được tựa vào ai đó, được để cho trái tim mình nghỉ ngơi.\n\nMỗi lần thắp nến, căn phòng như hóa thành khu vườn nhỏ giữa sa mạc, nơi gai nhọn không còn là thứ để tránh xa, mà là biểu tượng của sự kiên cường đầy dịu dàng.',
  },
  {
    slug: 'nang-mong-mo',
    title: 'Nắng Mộng Mơ',
    subtitle: 'Khoảnh khắc nắng chiều nằm yên trên bệ cửa sổ',
    relatedProductId: '1',
    coverImage: '/images/nang_mong_mo/nang_mong_mo.jpg',
    excerpt:
      'Có những buổi chiều, nắng không chỉ chiếu qua khung cửa, mà còn đánh thức những ước mơ nhỏ bé ngủ quên trong lòng mỗi người.',
    content:
      'Chiều hôm đó, căn phòng nhỏ ngập trong một màu vàng êm như mật ong. Nắng lười biếng bò qua khung cửa sổ, nằm yên trên giá sách, trên vài chiếc postcard cũ và trên chiếc cốc nến vừa được đặt vào góc bàn.\n\nChủ nhân căn phòng là một người thích mơ mộng nhưng lại hay quên những giấc mơ của mình. Cô bận rộn với công việc, với những cuộc hẹn, với những việc “phải làm” đến mức quên mất đã từng muốn điều gì cho riêng mình.\n\nKhi chiếc nến "Nắng Mộng Mơ" được thắp lên, hương thơm nhẹ nhàng như một lời gọi khẽ. Ánh nến hòa cùng màu nắng cuối ngày, tạo nên một khoảng sáng nhỏ nhưng đủ ấm để người ta dừng lại, ngồi xuống và thở chậm hơn một chút.\n\nCô mở lại cuốn sổ cũ, những dòng chữ thanh xuân hiện lên: muốn trồng một khu vườn nhỏ, muốn học một loại nhạc cụ, muốn đi xa thêm một chút để hiểu mình hơn. Những điều tưởng đã nằm yên trong bụi thời gian, bỗng trở nên rõ ràng dưới ánh nến.\n\n"Nắng Mộng Mơ" không phải là ngọn lửa rực rỡ, mà là thứ ánh sáng dịu dàng giúp ta nhìn lại những ước mơ đã từng rất thật. Mỗi lần thắp nến, đó là một lời hẹn: tối nay, ta sẽ dành một chút thời gian cho chính mình, cho những điều vẫn còn bỏ ngỏ.',
  },
  {
    slug: 'vuon-xanh',
    title: 'Vườn Xanh',
    subtitle: 'Hơi thở bình yên giữa những ngày vội vã',
    relatedProductId: '3',
    coverImage: '/images/vuon_xanh/vuon_xanh.png',
    excerpt:
      'Ở một góc rất nhỏ trong ngôi nhà, có một khu vườn không cần nắng, không cần mưa, nhưng lúc nào cũng tràn đầy cảm giác bình yên.',
    content:
      'Những ngày thành phố ồn ào hơn bình thường, con người cũng dễ trở nên mệt mỏi hơn. Tiếng còi xe, thông báo điện thoại, những cuộc trò chuyện dở dang… tất cả cứ bủa vây khiến người ta quên rằng mình đã lâu rồi không thật sự thở cho sâu.\n\nTrong căn phòng nhỏ nơi tầng cao, có một góc bàn dành riêng cho sự yên tĩnh. Ở đó có vài chậu cây bé xíu, chút rêu xanh mềm và một chiếc cốc nến mang tên "Vườn Xanh".\n\nKhi ánh nến được châm lên, cả góc nhỏ như được phủ một lớp không khí khác – chậm rãi, mát lành. Hương thơm thoảng qua như hơi thở của đất sau cơn mưa, gợi nhớ đến những buổi sáng trong veo ở vùng ngoại ô, nơi tiếng lá chạm nhau thay cho báo thức.\n\nNgười chủ căn phòng tắt bớt đèn, đặt điện thoại sang một bên. Họ chỉ ngồi đó, nhìn ánh lửa nhỏ lay động và cảm nhận ngực mình phập phồng theo từng nhịp thở. Không còn phải làm gì, không cần phải trở nên xuất sắc, chỉ cần bình yên trong vài phút là đủ.\n\n"Vườn Xanh" là lời mời gọi chúng ta dựng lên một khu vườn trong tâm trí – nơi ta luôn có thể trở về, bất kể bên ngoài ồn ào đến đâu. Mỗi lần thắp nến, ta đang tưới thêm một chút dịu dàng cho chính mình.',
  },
  {
    slug: 'hoa-hong-lang-man',
    title: 'Hoa Hồng Lãng Mạn',
    subtitle: 'Lời thì thầm rất khẽ của những điều khó nói thành lời',
    relatedProductId: '4',
    coverImage: '/images/hoa_hong_lang_man/hoa_hong_lang_man.jpg',
    excerpt:
      'Không phải ai cũng giỏi nói về yêu thương. Đôi khi, một ánh nến và mùi hương dịu nhẹ đã là đủ để thay ta gửi gắm những điều còn ngập ngừng.',
    content:
      'Trong căn phòng với bức tường màu kem, bàn tay ai đó đang loay hoay sắp xếp lại mọi thứ cho một buổi tối đặc biệt. Không có bó hoa thật sự nào, cũng không có nến thắp đầy phòng như trên phim. Chỉ có một chiếc cốc nến nhỏ mang tên "Hoa Hồng Lãng Mạn" được đặt ngay ngắn trên bàn.\n\nNgười ấy không giỏi thổ lộ. Mỗi lần muốn nói lời cảm ơn hay xin lỗi đều thấy cổ họng khô lại. Thế nên, họ chọn những điều thầm lặng: một bữa tối tự tay chuẩn bị, một chiếc ghế kéo sẵn, một ngọn nến thơm nhẹ nhàng chờ được thắp lên.\n\nKhi lửa chạm vào tim nến, mùi hương hoa hồng dịu ngọt lan tỏa, không vội vã, không áp đảo. Ánh nến phản chiếu trong đôi mắt người đối diện, biến khoảnh khắc bình thường trở nên rất dễ nhớ.\n\nKhông có lời tỏ tình hoa mỹ, chỉ là câu nói giản dị: “Hôm nay anh muốn cảm ơn em vì đã luôn ở đây”. Nhưng dường như, dưới ánh nến và giữa mùi hương ấy, câu nói bỗng trở nên sâu hơn, ấm hơn.\n\n"Hoa Hồng Lãng Mạn" là câu chuyện dành cho những người tin rằng yêu thương không nhất thiết phải ồn ào. Chỉ cần một khoảnh khắc đủ chân thành, một ánh nhìn đủ lâu, và một ngọn nến đủ dịu dàng để giữ lại dư âm cho những điều đẹp đẽ.',
  },
]


