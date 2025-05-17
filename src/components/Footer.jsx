const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-blue-900 to-blue-800 text-white pt-16 pb-8 px-4 md:px-8 lg:px-12 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-32 h-32 rounded-full bg-blue-700 blur-xl animate-float-slow"></div>
        <div className="absolute bottom-10 right-1/3 w-40 h-40 rounded-full bg-blue-600 blur-xl animate-float-medium"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full bg-blue-500 blur-lg animate-float-fast"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* About */}
          <div className="space-y-5">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-xl font-bold ml-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-100">آکادمی زبان انگلیسی</span>
            </div>
            <p className="text-blue-100 leading-relaxed">
              آموزش زبان انگلیسی با کیفیت جهانی و روش‌های نوین آموزشی برای تمام سنین و سطوح
            </p>
            <div className="flex space-x-4 space-x-reverse pt-2">
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06-4.123 0-.427-.013-.903-.06-1.408-.062-.578-.268-1.13-.589-1.566a3.996 3.996 0 00-.942-.93c-.436-.32-.988-.527-1.566-.589-.505-.047-.982-.06-1.408-.06-.427 0-.903.013-1.408.06-.578.062-1.13.268-1.566.589a3.996 3.996 0 00-.93.942c-.32.436-.527.988-.589 1.566-.047.505-.06.982-.06 1.408 0 .427.013.903.06 1.408.062.578.268 1.13.589 1.566.276.376.612.712.93.942.436.32.988.527 1.566.589.505.047.982.06 1.408.06.427 0 .903-.013 1.408-.06.578-.062 1.13-.268 1.566-.589a3.996 3.996 0 00.942-.93c.32-.436.527-.988.589-1.566.047-.505.06-.982.06-1.408 0-.427-.013-.903-.06-1.408-.062-.578-.268-1.13-.589-1.566a3.996 3.996 0 00-.942-.93c-.436-.32-.988-.527-1.566-.589-.505-.047-.982-.06-1.408-.06zm-6.268 1.89a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm9.318 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h3 className="text-lg font-bold text-blue-100 border-b border-blue-700 pb-2">لینک‌های سریع</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center">
                  <svg className="w-4 h-4 ml-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  صفحه اصلی
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center">
                  <svg className="w-4 h-4 ml-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  دوره‌های آموزشی
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center">
                  <svg className="w-4 h-4 ml-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  تعیین سطح رایگان
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center">
                  <svg className="w-4 h-4 ml-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  وبلاگ آموزشی
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center">
                  <svg className="w-4 h-4 ml-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  تماس با ما
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <h3 className="text-lg font-bold text-blue-100 border-b border-blue-700 pb-2">اطلاعات تماس</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-300 mt-0.5 ml-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <span className="block text-blue-200">شماره تماس:</span>
                  <a href="tel:+989123456789" className="text-white hover:text-blue-100 transition-colors duration-300">۰۹۱۲ ۳۴۵ ۶۷۸۹</a>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-300 mt-0.5 ml-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <span className="block text-blue-200">ایمیل:</span>
                  <a href="mailto:info@example.com" className="text-white hover:text-blue-100 transition-colors duration-300">info@example.com</a>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-300 mt-0.5 ml-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <span className="block text-blue-200">آدرس:</span>
                  <span className="text-white">تهران، خیابان آزادی، پلاک ۱۲۳</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-5">
            <h3 className="text-lg font-bold text-blue-100 border-b border-blue-700 pb-2">عضویت در خبرنامه</h3>
            <p className="text-blue-200">
              برای دریافت جدیدترین مطالب آموزشی و تخفیف‌های ویژه در خبرنامه ما عضو شوید
            </p>
            <form className="mt-4 space-y-3">
              <input 
                type="email" 
                placeholder="آدرس ایمیل شما" 
                className="w-full px-4 py-2 rounded-lg bg-blue-800 border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-blue-400"
              />
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
              >
                عضویت
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-300 text-sm">
            © {new Date().getFullYear()} <a href="https://pouyaaref.ir/" >طراحی شده توسط پویا عارف</a> آکادمی زبان انگلیسی. تمام حقوق محفوظ است.
          </p>
          <div className="flex space-x-6 space-x-reverse mt-4 md:mt-0">
            <a href="#" className="text-blue-300 hover:text-white text-sm transition-colors duration-300">قوانین و مقررات</a>
            <a href="#" className="text-blue-300 hover:text-white text-sm transition-colors duration-300">حریم خصوصی</a>
            <a href="#" className="text-blue-300 hover:text-white text-sm transition-colors duration-300">سوالات متداول</a>
          </div>
        </div>
      </div>

      {/* Floating back to top button */}
      <button 
        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        className="fixed bottom-6 left-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
        aria-label="بازگشت به بالا"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;