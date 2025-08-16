






import React from 'react';

const BlogPost = () => {
  return (
    <article className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Giới Thiệu Chi Tiết Tàu Ngầm Quân Sự Kilo</h2>
      <img
        src="https://via.placeholder.com/800x400"
        alt="Tàu ngầm Kilo"
        className="w-full h-auto rounded-lg mb-2"
        onError={(e) => (e.target.src = 'https://via.placeholder.com/800x400?text=Image+Not+Found')}
      />
      <p className="caption">Tàu ngầm Kilo trong một cuộc diễn tập hải quân</p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Lịch Sử Phát Triển</h3>
      <p className="text-gray-700 mb-4">
        Tàu ngầm lớp Kilo, được phát triển bởi Liên Xô vào những năm 1970, là một trong những dòng tàu ngầm diesel-điện nổi tiếng nhất thế giới. Được thiết kế bởi Cục Thiết kế Rubin tại Leningrad (nay là Saint Petersburg), dự án 877 Paltus (tên mã NATO: Kilo) ra đời nhằm đáp ứng nhu cầu về một tàu ngầm đa năng, có khả năng thực hiện các nhiệm vụ tuần tra, chống tàu mặt nước, và do thám. Tàu ngầm Kilo lần đầu tiên được đưa vào hoạt động trong Hải quân Liên Xô vào năm 1980 và nhanh chóng trở thành trụ cột trong chiến lược hải quân của nhiều quốc gia.
      </p>
      <img
        src="https://via.placeholder.com/600x300"
        alt="Cục Thiết kế Rubin"
        className="w-full h-auto rounded-lg mb-2"
        onError={(e) => (e.target.src = 'https://via.placeholder.com/600x300?text=Image+Not+Found')}
      />
      <p className="caption">Cục Thiết kế Rubin, nơi phát triển tàu ngầm Kilo</p>
      <p className="text-gray-700 mb-4">
        Sau sự sụp đổ của Liên Xô, Nga tiếp tục cải tiến dòng tàu ngầm này, dẫn đến sự ra đời của phiên bản nâng cấp Dự án 636 Varshavyanka (Improved Kilo). Phiên bản này được cải tiến về công nghệ tàng hình, hệ thống điện tử, và khả năng mang tên lửa hành trình hiện đại như Kalibr. Hiện nay, tàu ngầm Kilo được sử dụng bởi các quốc gia như Nga, Việt Nam, Ấn Độ, Trung Quốc, và Algeria.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Thông Số Kỹ Thuật</h3>
      <p className="text-gray-700 mb-4">
        Tàu ngầm Kilo được thiết kế để hoạt động hiệu quả trong các vùng biển nông và sâu, với các thông số kỹ thuật ấn tượng:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700">
        <li><strong>Chiều dài:</strong> 73,8 mét (Dự án 877) hoặc 74 mét (Dự án 636)</li>
        <li><strong>Độ choán nước:</strong> 2.350 tấn (nổi), 3.950 tấn (lặn)</li>
        <li><strong>Tốc độ:</strong> 17 hải lý/giờ (nổi), 20 hải lý/giờ (lặn)</li>
        <li><strong>Độ sâu lặn tối đa:</strong> 300 mét</li>
        <li><strong>Vũ khí:</strong> 6 ống phóng ngư lôi 533mm (có thể mang 18 ngư lôi hoặc 24 mìn), tên lửa hành trình Kalibr-PL (phiên bản 636), tên lửa chống hạm</li>
        <li><strong>Hệ thống đẩy:</strong> Diesel-điện với pin dự phòng, cho phép hoạt động liên tục dưới nước trong thời gian dài</li>
        <li><strong>Thủy thủ đoàn:</strong> 52-57 người, tùy phiên bản</li>
      </ul>
      <img
        src="https://via.placeholder.com/600x300"
        alt="Hệ thống vũ khí Kilo"
        className="w-full h-auto rounded-lg mb-2"
        onError={(e) => (e.target.src = 'https://via.placeholder.com/600x300?text=Image+Not+Found')}
      />
      <p className="caption">Hệ thống ống phóng ngư lôi 533mm trên tàu ngầm Kilo</p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Công Nghệ Tàng Hình</h3>
      <p className="text-gray-700 mb-4">
        Một trong những điểm mạnh nhất của tàu ngầm Kilo là khả năng tàng hình vượt trội. Lớp vỏ tàu được phủ một lớp vật liệu hấp thụ âm thanh đặc biệt, giúp giảm thiểu tín hiệu sonar, khiến tàu khó bị phát hiện bởi các hệ thống chống ngầm tiên tiến. Hệ thống động cơ diesel-điện được tối ưu hóa để giảm rung động và tiếng ồn, đặc biệt khi tàu di chuyển ở tốc độ thấp. Ngoài ra, các phiên bản mới hơn của Kilo được trang bị hệ thống AIP (Air-Independent Propulsion), cho phép tàu lặn lâu hơn mà không cần nổi lên để sạc pin.
      </p>
      <img
        src="https://via.placeholder.com/600x300"
        alt="Công nghệ tàng hình Kilo"
        className="w-full h-auto rounded-lg mb-2"
        onError={(e) => (e.target.src = 'https://via.placeholder.com/600x300?text=Image+Not+Found')}
      />
      <p className="caption">Lớp vỏ hấp thụ âm thanh của tàu ngầm Kilo</p>
      <video controls className="w-full h-auto rounded-lg mb-2">
        <source src="https://via.placeholder.com/video.mp4" type="video/mp4" />
        Trình duyệt của bạn không hỗ trợ thẻ video.
      </video>
      <p className="caption">Video minh họa hoạt động của tàu ngầm Kilo dưới nước</p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Các Biến Thể Nổi Bật</h3>
      <p className="text-gray-700 mb-4">
        Dòng tàu ngầm Kilo có nhiều biến thể, mỗi biến thể được tối ưu hóa cho các yêu cầu cụ thể của các quốc gia sử dụng:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700">
        <li><strong>Dự án 877 Paltus:</strong> Phiên bản gốc, tập trung vào khả năng chống tàu mặt nước và tuần tra ven biển.</li>
        <li><strong>Dự án 636 Varshavyanka:</strong> Phiên bản cải tiến với hệ thống điện tử hiện đại hơn, khả năng mang tên lửa Kalibr, và độ tàng hình cao hơn.</li>
        <li><strong>Kilo xuất khẩu:</strong> Được điều chỉnh để phù hợp với nhu cầu của các quốc gia như Việt Nam (lớp Kilo Hà Nội) và Ấn Độ (lớp Sindhughosh).</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">Vai Trò Chiến Lược</h3>
      <p className="text-gray-700 mb-4">
        Tàu ngầm Kilo đóng vai trò quan trọng trong chiến lược hải quân của các quốc gia sử dụng. Với khả năng mang tên lửa hành trình Kalibr, Kilo có thể tấn công các mục tiêu trên đất liền từ khoảng cách xa, cung cấp khả năng răn đe chiến lược. Trong các nhiệm vụ chống tàu mặt nước, Kilo sử dụng ngư lôi và tên lửa chống hạm để đối phó với các tàu chiến lớn như tàu khu trục hoặc tàu sân bay. Ngoài ra, tàu ngầm Kilo còn được sử dụng cho các nhiệm vụ do thám, thu thập thông tin tình báo, và triển khai lực lượng đặc nhiệm.
      </p>
      <p className="text-gray-700 mb-4">
        Một số quốc gia như Việt Nam đã sử dụng tàu ngầm Kilo để bảo vệ chủ quyền biển đảo, đặc biệt ở các khu vực tranh chấp như Biển Đông. Khả năng hoạt động bí mật và hỏa lực mạnh mẽ của Kilo giúp tăng cường sức mạnh phòng thủ và khả năng phản công trong các tình huống xung đột.
      </p>
      <img
        src="https://via.placeholder.com/600x300"
        alt="Tàu ngầm Kilo ở Biển Đông"
        className="w-full h-auto rounded-lg mb-2"
        onError={(e) => (e.target.src = 'https://via.placeholder.com/600x300?text=Image+Not+Found')}
      />
      <p className="caption">Tàu ngầm Kilo hoạt động ở khu vực Biển Đông</p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Tương Lai Của Tàu Ngầm Kilo</h3>
      <p className="text-gray-700 mb-4">
        Mặc dù đã được sử dụng từ những năm 1980, tàu ngầm Kilo vẫn tiếp tục được nâng cấp để đáp ứng các yêu cầu tác chiến hiện đại. Nga đang phát triển các phiên bản mới với công nghệ tiên tiến hơn, bao gồm hệ thống sonar cải tiến, vũ khí chính xác cao, và khả năng tích hợp với các hệ thống chỉ huy và kiểm soát hiện đại. Trong bối cảnh cạnh tranh chiến lược toàn cầu, tàu ngầm Kilo sẽ tiếp tục đóng vai trò quan trọng trong các lực lượng hải quân trên thế giới.
      </p>
    </article>
  );
};

const RelatedContent = () => {
  return (
    <div className="related-content mb-6">
      <h3 className="text-xl font-semibold mb-4">Nội dung liên quan</h3>
      <div className="related-item opacity-100">
        <img
          src="https://via.placeholder.com/300x150"
          alt="Tàu Ngầm Hạt Nhân Trong Hành Động"
          className="related-media"
          onError={(e) => (e.target.src = 'https://via.placeholder.com/300x150?text=Image+Not+Found')}
        />
        <div className="mt-2">
          <p className="text-sm text-gray-500 italic">Tàu Ngầm Hạt Nhân Trong Hành Động</p>
        </div>
      </div>
      <div className="related-item opacity-100">
        <video controls className="related-media">
          <source src="https://via.placeholder.com/video.mp4" type="video/mp4" />
          Trình duyệt của bạn không hỗ trợ thẻ video.
        </video>
        <div className="mt-2">
          <p className="text-sm text-gray-500 italic">Video Tàu Ngầm Kilo Diễn Tập</p>
        </div>
      </div>
      <div className="related-item opacity-100">
        <div className="p-2">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Lịch Sử Phát Triển Tàu Ngầm Quân Sự
          </a>
        </div>
        <div className="mt-2">
          <p className="text-sm text-gray-500 italic">Lịch Sử Phát Triển Tàu Ngầm Quân Sự</p>
        </div>
      </div>
    </div>
  );
};

const Submarine = () => {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
      <main className="md:w-2/3">
        <BlogPost />
      </main>
      <aside className="md:w-1/3">
        <div className="sidebar-sticky">
          <RelatedContent />
        </div>
      </aside>
    </div>
  );
};

export default Submarine;
