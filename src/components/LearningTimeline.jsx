const LearningTimeline = () => {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-16 px-4 md:px-8 lg:px-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 right-10 w-24 h-24 rounded-full bg-blue-200 blur-xl animate-float-slow"></div>
        <div className="absolute bottom-1/3 left-20 w-32 h-32 rounded-full bg-blue-100 blur-xl animate-float-medium"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            برنامه یادگیری شخصی‌سازی شده
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">چقدر طول می‌کشد</span> تا انگلیسی را یاد بگیرید؟
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            مدت زمان یادگیری بستگی به سطح فعلی، هدف یادگیری و میزان تمرین روزانه شما دارد. این جدول بر اساس استانداردهای CEFR تهیه شده است:
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Progress line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-400 to-blue-200 transform -translate-x-1/2 z-0"></div>
          
          {/* Timeline items - alternating sides */}
          <div className="space-y-12 md:space-y-16 relative z-10">
            {/* Beginner */}
            <div className="flex flex-col md:flex-row items-center md:odd:flex-row-reverse group">
              <div className="w-full md:w-1/2 px-0 md:px-8 mb-6 md:mb-0">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-blue-200 transition-all duration-300 group-hover:shadow-xl">
                  <div className="flex items-center mb-3">
                    <div className="bg-blue-100 text-blue-800 p-2 rounded-lg mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">سطح مبتدی (A1)</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    توانایی درک و استفاده از عبارات ساده روزمره و معرفی خود
                  </p>
                  <div className="flex items-center text-blue-600 font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    مدت زمان: ۳-۶ ماه (با تمرین روزانه)
                  </div>
                </div>
              </div>
              
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-white rounded-full border-4 border-blue-100 shadow-lg mx-auto md:mx-0 relative z-10">
                <span className="text-2xl font-bold text-blue-600">A1</span>
              </div>
              
              <div className="w-full md:w-1/2 px-0 md:px-8 hidden md:block"></div>
            </div>

            {/* Elementary */}
            <div className="flex flex-col md:flex-row items-center md:odd:flex-row-reverse group">
              <div className="w-full md:w-1/2 px-0 md:px-8 mb-6 md:mb-0">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-blue-200 transition-all duration-300 group-hover:shadow-xl">
                  <div className="flex items-center mb-3">
                    <div className="bg-blue-100 text-blue-800 p-2 rounded-lg mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">سطح مقدماتی (A2)</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    توانایی ارتباط در موقعیت‌های ساده و توصیف نیازهای ابتدایی
                  </p>
                  <div className="flex items-center text-blue-600 font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    مدت زمان: ۶-۹ ماه (پس از سطح A1)
                  </div>
                </div>
              </div>
              
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-white rounded-full border-4 border-blue-200 shadow-lg mx-auto md:mx-0 relative z-10">
                <span className="text-2xl font-bold text-blue-600">A2</span>
              </div>
              
              <div className="w-full md:w-1/2 px-0 md:px-8 hidden md:block"></div>
            </div>

            {/* Intermediate */}
            <div className="flex flex-col md:flex-row items-center md:odd:flex-row-reverse group">
              <div className="w-full md:w-1/2 px-0 md:px-8 mb-6 md:mb-0">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-blue-200 transition-all duration-300 group-hover:shadow-xl">
                  <div className="flex items-center mb-3">
                    <div className="bg-blue-100 text-blue-800 p-2 rounded-lg mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">سطح متوسط (B1)</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    توانایی مکالمه در سفر، توصیف تجربیات و بیان نظرات به صورت ساده
                  </p>
                  <div className="flex items-center text-blue-600 font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    مدت زمان: ۹-۱۲ ماه (پس از سطح A2)
                  </div>
                </div>
              </div>
              
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-white rounded-full border-4 border-blue-300 shadow-lg mx-auto md:mx-0 relative z-10">
                <span className="text-2xl font-bold text-blue-600">B1</span>
              </div>
              
              <div className="w-full md:w-1/2 px-0 md:px-8 hidden md:block"></div>
            </div>

            {/* Upper Intermediate */}
            <div className="flex flex-col md:flex-row items-center md:odd:flex-row-reverse group">
              <div className="w-full md:w-1/2 px-0 md:px-8 mb-6 md:mb-0">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-blue-200 transition-all duration-300 group-hover:shadow-xl">
                  <div className="flex items-center mb-3">
                    <div className="bg-blue-100 text-blue-800 p-2 rounded-lg mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">سطح بالاتر از متوسط (B2)</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    توانایی تعامل روان با انگلیسی زبانان و تولید متن‌های واضح در موضوعات مختلف
                  </p>
                  <div className="flex items-center text-blue-600 font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    مدت زمان: ۱۲-۱۸ ماه (پس از سطح B1)
                  </div>
                </div>
              </div>
              
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-white rounded-full border-4 border-blue-400 shadow-lg mx-auto md:mx-0 relative z-10">
                <span className="text-2xl font-bold text-blue-600">B2</span>
              </div>
              
              <div className="w-full md:w-1/2 px-0 md:px-8 hidden md:block"></div>
            </div>

            {/* Advanced */}
            <div className="flex flex-col md:flex-row items-center md:odd:flex-row-reverse group">
              <div className="w-full md:w-1/2 px-0 md:px-8 mb-6 md:mb-0">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-blue-200 transition-all duration-300 group-hover:shadow-xl">
                  <div className="flex items-center mb-3">
                    <div className="bg-blue-100 text-blue-800 p-2 rounded-lg mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">سطح پیشرفته (C1)</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    توانایی استفاده انعطاف‌پذیر و موثر از زبان برای اهداف اجتماعی، تحصیلی و حرفه‌ای
                  </p>
                  <div className="flex items-center text-blue-600 font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    مدت زمان: ۱۸-۲۴ ماه (پس از سطح B2)
                  </div>
                </div>
              </div>
              
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-white rounded-full border-4 border-blue-500 shadow-lg mx-auto md:mx-0 relative z-10">
                <span className="text-2xl font-bold text-blue-600">C1</span>
              </div>
              
              <div className="w-full md:w-1/2 px-0 md:px-8 hidden md:block"></div>
            </div>
          </div>
        </div>

        {/* Key factors */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg border border-gray-100 p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">عوامل موثر در سرعت یادگیری</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-50 rounded-xl p-5 text-center hover:bg-blue-100 transition-colors duration-300">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">زمان تمرین روزانه</h4>
              <p className="text-gray-700 text-sm">حداقل ۱ ساعت مطالعه روزانه توصیه می‌شود</p>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-5 text-center hover:bg-blue-100 transition-colors duration-300">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">روش آموزشی</h4>
              <p className="text-gray-700 text-sm">استفاده از روش‌های علمی و مدرن یادگیری زبان</p>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-5 text-center hover:bg-blue-100 transition-colors duration-300">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">تعامل با دیگران</h4>
              <p className="text-gray-700 text-sm">مکالمه با native speakers سرعت یادگیری را افزایش می‌دهد</p>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-5 text-center hover:bg-blue-100 transition-colors duration-300">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">انگیزه شخصی</h4>
              <p className="text-gray-700 text-sm">هدف مشخص و انگیزه قوی عامل کلیدی در یادگیری است</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-lg mb-6">آیا می‌خواهید بدانید چقدر طول می‌کشد به سطح مورد نظرتان برسید؟</p>
          <a 
            href="#assessment" 
            className="inline-block bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-3.5 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            ارزیابی رایگان سطح زبان شما
          </a>
        </div>
      </div>
    </section>
  );
};

export default LearningTimeline;