const SubHeader = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 px-4 md:px-8 lg:px-12 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-blue-200 blur-xl animate-float-slow"></div>
        <div className="absolute bottom-10 right-20 w-32 h-32 rounded-full bg-blue-100 blur-xl animate-float-medium"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-blue-300 blur-lg animate-float-fast"></div>
        <div className="absolute bottom-1/4 left-1/5 w-20 h-20 rounded-full bg-blue-100 blur-lg animate-float-slow"></div>
      </div>
      
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16 relative z-10">
        {/* Teacher's Photo with elegant interactive frame */}
        <div className="relative group w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 flex-shrink-0">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 transform rotate-2 scale-105 group-hover:rotate-3 group-hover:scale-110 transition-all duration-500 shadow-xl"></div>
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 border-4 border-white overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-2xl">
            <img
              src="/teacher-photo.png" // Replace with actual image path
              alt="استاد امیرعلی باباکیانی - مدرس زبان انگلیسی"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
          
          {/* Experience badge with animation */}
          <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2 rounded-full shadow-lg font-medium text-sm md:text-base flex items-center animate-bounce-slow">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            ۱۵+ سال تجربه تدریس
          </div>
        </div>

        {/* Introduction Text (RTL) */}
        <div className="text-right space-y-5 max-w-2xl">
          <div className="space-y-3">
            <span className="inline-block bg-gradient-to-r from-blue-100 to-blue-50 text-blue-800 text-sm font-medium px-4 py-1.5 rounded-full border border-blue-200 shadow-sm">
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                آموزش آنلاین و حضوری - کلاس‌های فشرده و ترمیک
              </span>
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">آموزش زبان انگلیسی</span> با جدیدترین متدهای روز دنیا
            </h1>
            <h2 className="text-xl md:text-2xl text-blue-600 font-medium">
              استاد امیرعلی باباکیانی - مدرس بین‌المللی زبان انگلیسی
            </h2>
          </div>
          
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            با روش‌های نوین آموزشی و برنامه‌ریزی شخصی‌سازی شده، انگلیسی را مانند زبان مادری یاد بگیرید. دوره‌های تخصصی برای تمام سطوح از مبتدی تا پیشرفته، آمادگی آزمون‌های بین‌المللی (IELTS, TOEFL)، و مکالمه تجاری.
          </p>
          
          {/* Stats with hover effects */}
          <div className="flex flex-wrap gap-4 pt-2">
            <div className="flex items-center bg-white px-4 py-3 rounded-xl shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 group">
              <div className="bg-blue-100 p-2 rounded-full mr-3 group-hover:bg-blue-200 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-gray-900 text-xl">۵۰۰+</div>
                <div className="text-sm text-gray-600">شاگرد موفق</div>
              </div>
            </div>
            
            <div className="flex items-center bg-white px-4 py-3 rounded-xl shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 group">
              <div className="bg-blue-100 p-2 rounded-full mr-3 group-hover:bg-blue-200 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-gray-900 text-xl">۹۸٪</div>
                <div className="text-sm text-gray-600">رضایت دانشجویان</div>
              </div>
            </div>

            <div className="flex items-center bg-white px-4 py-3 rounded-xl shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 group">
              <div className="bg-blue-100 p-2 rounded-full mr-3 group-hover:bg-blue-200 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-gray-900 text-xl">۱۰۰٪</div>
                <div className="text-sm text-gray-600">گارانتی نتیجه</div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Call-to-Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-6">
            <a 
              href="#reservation" 
              className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-3.5 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center group"
            >
              <span className="relative z-10 flex items-center">
                رزرو کلاس آزمایشی رایگان
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></span>
            </a>
            
            <a 
              href="#courses" 
              className="relative overflow-hidden bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 px-6 py-3.5 rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg flex items-center group"
            >
              <span className="relative z-10 flex items-center">
                مشاهده دوره‌ها
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></span>
            </a>
            
            <a 
              href="#contact" 
              className="relative overflow-hidden bg-white hover:bg-gray-50 text-blue-600 border border-blue-200 px-6 py-3.5 rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg flex items-center group"
            >
              <span className="relative z-10 flex items-center">
                تماس مستقیم
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Floating arrow for mobile */}
      <div className="md:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default SubHeader;