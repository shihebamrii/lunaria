import React from 'react';

    const Footer: React.FC = () => {
      return (
        <footer className="bg-slate-900/60 border-t border-blue-400/20 mt-20">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center space-y-4">
              <div className="flex justify-center space-x-8 text-sm">
                <a href="/about" className="text-blue-300 hover:text-blue-200 transition-colors">
                  من نحن
                </a>
                <a href="/contact" className="text-blue-300 hover:text-blue-200 transition-colors">
                  اتصل بنا
                </a>
                <a href="/hope" className="text-blue-300 hover:text-blue-200 transition-colors">
                  الأمل
                </a>
              </div>
              
              <div className="text-blue-300/70 text-sm">
                <p className="mb-2">تحت ضوء القمر، يمكن لكل طفل أن يتعلم كيف يضيء 🌕</p>
                <p>© 2025 لوناريا - مدرسة القمر</p>
              </div>

              <div className="pt-4 border-t border-blue-400/10">
                <p className="text-xs text-blue-300/50">
                  صُنع بـ ❤️ بواسطة <a rel="nofollow" target="_blank" href="https://instagram.com/shihebamri" className="text-blue-300 hover:text-blue-200">shihebamri</a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      );
    };

    export default Footer;