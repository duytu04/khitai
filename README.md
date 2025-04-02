# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



/src
  ├── /assets                   # Tài nguyên tĩnh
  │   ├── /images               # Hình ảnh sử dụng trong ứng dụng
  │   │   ├── logo.png          # Logo của ứng dụng
  │   │   ├── weapons           # Thư mục chứa hình ảnh khí tài
  │   │   │   ├── tank.jpg      # Hình ảnh xe tăng
  │   │   │   ├── jet.jpg       # Hình ảnh máy bay
  │   │   │   └── missile.jpg   # Hình ảnh tên lửa
  │   ├── /icons                # Các biểu tượng UI
  │   │   ├── search.svg        # Icon tìm kiếm
  │   │   ├── menu.svg          # Icon menu
  │   │   └── close.svg         # Icon đóng
  │   └── /fonts                # Font chữ tùy chỉnh
  │       ├── custom-font.ttf   # Font tùy chỉnh
  │       └── custom-font-bold.ttf # Font đậm
  ├── /components               # Các component tái sử dụng
  │   ├── /common               # Component nhỏ, chung
  │   │   ├── Button.jsx        # Nút bấm tái sử dụng
  │   │   └── Loading.jsx       # Hiển thị khi tải dữ liệu
  │   ├── Card.jsx              # Hiển thị khí tài dạng card
  │   ├── Navbar.jsx            # Menu điều hướng
  │   ├── Footer.jsx            # Thông tin chân trang
  │   ├── SearchBar.jsx         # Thanh tìm kiếm
  │   └── Modal.jsx             # Popup chi tiết nhanh
  ├── /pages                    # Các trang chính
  │   ├── HomePage.jsx          # Trang chủ
  │   ├── WeaponDetailPage.jsx  # Trang chi tiết khí tài
  │   ├── WeaponListPage.jsx    # Danh sách khí tài
  │   ├── NewsPage.jsx          # Trang tin tức
  │   └── NotFoundPage.jsx      # Trang 404
  ├── /data                     # Dữ liệu tĩnh hoặc giả lập
  │   ├── weapons.js            # Danh sách khí tài
  │   ├── categories.js         # Danh mục khí tài
  │   └── news.js               # Tin tức quân sự
  ├── /utils                    # Hàm tiện ích
  │   ├── formatDate.js         # Định dạng ngày tháng
  │   ├── filterWeapons.js      # Lọc khí tài
  │   └── slugify.js            # Tạo slug từ tên khí tài
  ├── /hooks                    # Custom hooks
  │   ├── useFetchData.js       # Lấy dữ liệu từ API
  │   ├── useSearch.js          # Xử lý tìm kiếm
  │   └── useWindowSize.js      # Lấy kích thước cửa sổ
  ├── /services                 # Gọi API
  │   ├── api.js                # Cấu hình axios hoặc fetch
  │   ├── weaponService.js      # API cho khí tài
  │   ├── categoryService.js    # API cho danh mục
  │   └── newsService.js        # API cho tin tức
  ├── /styles                   # CSS tách riêng
  │   ├── /common               # CSS cho component chung
  │   │   ├── Button.css        # CSS cho Button
  │   │   └── Loading.css       # CSS cho Loading
  │   ├── Card.css              # CSS cho Card
  │   ├── Navbar.css            # CSS cho Navbar
  │   ├── Footer.css            # CSS cho Footer
  │   ├── SearchBar.css         # CSS cho SearchBar
  │   ├── Modal.css             # CSS cho Modal
  │   ├── HomePage.css          # CSS cho HomePage
  │   ├── WeaponDetailPage.css  # CSS cho WeaponDetailPage
  │   ├── WeaponListPage.css    # CSS cho WeaponListPage
  │   ├── NewsPage.css          # CSS cho NewsPage
  │   ├── NotFoundPage.css      # CSS cho NotFoundPage
  │   └── App.css               # CSS cho App
  ├── App.jsx                   # Thành phần chính
  ├── index.js                  # Điểm vào ứng dụng
  └── index.css                 # CSS toàn cục