const AboutMe = () => {
  return (
    <section className="relative bg-gradient-to-b from-white to-blue-50 py-20 px-4 md:px-8 lg:px-12 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full bg-blue-200 blur-xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/3 w-40 h-40 rounded-full bg-blue-100 blur-xl animate-float-medium"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full bg-blue-300 blur-lg animate-float-fast"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-gradient-to-r from-blue-100 to-blue-50 text-blue-800 text-sm font-medium px-4 py-1.5 rounded-full mb-4 border border-blue-200 shadow-sm">
            معرفی استاد زبان انگلیسی
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">امیرعلی باباکیانی</span>
            <br />
            مدرس بین‌المللی زبان انگلیسی
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            با بیش از ۱۵ سال تجربه تدریس به صدها زبان‌آموز در سطوح مختلف از مبتدی تا پیشرفته
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Profile image with creative frame */}
          <div className="relative group w-full max-w-md flex-shrink-0">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl border-8 border-white transform rotate-1 group-hover:rotate-0 transition-transform duration-500">
              <img
                src="/teacher-profile.jpg"
                alt="استاد امیرعلی باباکیانی"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-blue-500/10 mix-blend-multiply"></div>
            </div>
            
            {/* Floating certificates */}
            <div className="absolute -bottom-6 -left-6 bg-white p-2 rounded-lg shadow-lg border border-gray-200 transform rotate-6 group-hover:rotate-3 transition-transform duration-300">
              <div className="w-24 h-24 md:w-28 md:h-28 bg-blue-50 rounded-md overflow-hidden border-2 border-white">
                <img src="/certificate-1.jpg" alt="گواهینامه TESOL" className="w-full h-full object-cover" />
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white p-2 rounded-lg shadow-lg border border-gray-200 transform -rotate-6 group-hover:-rotate-3 transition-transform duration-300">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-blue-50 rounded-md overflow-hidden border-2 border-white">
                <img src="/certificate-2.jpg" alt="گواهینامه TEFL" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Bio content */}
          <div className="flex-1 space-y-6 text-right">
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p className="text-lg leading-relaxed">
                <span className="font-bold text-blue-600">سلام!</span> من امیرعلی باباکیانی هستم، مدرس زبان انگلیسی با مدرک کارشناسی ارشد آموزش زبان انگلیسی از دانشگاه تهران و دارای گواهینامه‌های بین‌المللی TESOL و TEFL از دانشگاه کمبریج.
              </p>
              
              <p className="text-lg leading-relaxed">
                در طول ۱۵ سال گذشته، به بیش از ۵۰۰ زبان‌آموز در سطوح مختلف کمک کرده‌ام تا به اهداف زبانی خود برسند، از مکالمه روزمره گرفته تا آمادگی برای آزمون‌های بین‌المللی مانند آیلتس و تافل.
              </p>
              
              <ul className="space-y-3 mt-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 ml-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>تخصص در آموزش مکالمه روان و لهجه طبیعی</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 ml-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>طراحی دوره‌های شخصی‌سازی شده بر اساس نیاز هر زبان‌آموز</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 ml-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>استفاده از جدیدترین متدهای آموزشی مبتنی بر تحقیقات روز دنیا</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 ml-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>تدریس به دانشجویان از ۳۰ کشور مختلف جهان</span>
                </li>
              </ul>
            </div>

            {/* Teaching approach */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <svg className="h-6 w-6 text-blue-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                روش تدریس من
              </h3>
              <p className="text-gray-700">
                باور دارم یادگیری زبان باید لذت‌بخش، کاربردی و متناسب با سبک زندگی هر فرد باشد. در کلاس‌های من از ترکیبی از روش‌های ارتباطی (Communicative Approach)، یادگیری مبتنی بر تکلیف (Task-Based Learning) و غوطه‌وری در زبان (Immersion) استفاده می‌کنم.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-xl">
            <div className="text-4xl font-bold text-blue-600 mb-2">۱۵+</div>
            <div className="text-gray-700">سال تجربه تدریس</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-xl">
            <div className="text-4xl font-bold text-blue-600 mb-2">۵۰۰+</div>
            <div className="text-gray-700">شاگرد موفق</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-xl">
            <div className="text-4xl font-bold text-blue-600 mb-2">۳۰+</div>
            <div className="text-gray-700">کشور مختلف</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-xl">
            <div className="text-4xl font-bold text-blue-600 mb-2">۱۰۰٪</div>
            <div className="text-gray-700">رضایت شاگردان</div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
          >
            تماس برای مشاوره رایگان
            <svg className="h-5 w-5 mr-2 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;