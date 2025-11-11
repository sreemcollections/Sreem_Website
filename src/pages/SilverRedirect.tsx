import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

export default function SilverRedirect() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Wait 5 seconds, then fade out
    const fadeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    // After fade completes, redirect to Panchaloha
    const redirectTimer = setTimeout(() => {
      navigate('/jewelry/panchaloham');
    }, 5700);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(redirectTimer);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 dark:from-slate-900 dark:via-gray-900 dark:to-slate-800 px-4">
      <div
        className={`max-w-2xl w-full transition-all duration-700 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        {/* Main Card */}
        <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-slate-800 shadow-2xl border border-slate-200 dark:border-slate-700">
          {/* Decorative Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '30px 30px',
              }}
            ></div>
          </div>

          {/* Content */}
          <div className="relative p-8 sm:p-12 text-center">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-400 to-gray-500 blur-xl opacity-30 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-slate-100 to-gray-200 dark:from-slate-700 dark:to-gray-800 rounded-full p-6 shadow-lg">
                  <Sparkles className="h-12 w-12 text-slate-600 dark:text-slate-300 animate-pulse" />
                </div>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-playfair font-bold mb-4 bg-gradient-to-r from-slate-700 via-gray-600 to-slate-700 dark:from-slate-200 dark:via-gray-300 dark:to-slate-200 bg-clip-text text-transparent">
              Silver Collection
            </h1>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-yellow-100 dark:from-amber-900 dark:to-yellow-900 text-amber-800 dark:text-amber-200 px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-md">
              <Sparkles className="h-4 w-4" />
              Coming Soon
            </div>

            {/* Message */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-4 leading-relaxed max-w-xl mx-auto">
              Our exquisite Silver Collection is arriving soon!
            </p>

            <p className="text-base text-slate-500 dark:text-slate-400 mb-8">
              In the meantime, explore our stunning{' '}
              <span className="font-semibold text-amber-700 dark:text-amber-400">
                Panchaloha Collection
              </span>
            </p>

            {/* Progress Indicator */}
            <div className="flex justify-center gap-2 mb-4">
              <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
              <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>

            {/* Redirect Message */}
            <p className="text-sm text-slate-400 dark:text-slate-500">
              Redirecting you to Panchaloha Collection...
            </p>
          </div>

          {/* Decorative Border */}
          <div className="absolute inset-0 border-2 border-gradient-to-r from-transparent via-slate-200 dark:via-slate-600 to-transparent rounded-3xl pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
}
