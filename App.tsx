import React from 'react';
    import '@radix-ui/themes/styles.css';
    import { Theme } from '@radix-ui/themes';
    import { ToastContainer } from 'react-toastify';
    import 'react-toastify/dist/ReactToastify.css';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

    import Home from './src/pages/Home';
    import Learn from './src/pages/Learn';
    import Course from './src/pages/Course';
    import About from './src/pages/About';
    import Contact from './src/pages/Contact';
    import Hope from './src/pages/Hope';
    import NotFound from './src/pages/NotFound';

    const App: React.FC = () => {
      return (
        <Theme appearance="dark" radius="large" scaling="100%">
          <Router>
            <main className="min-h-screen font-inter">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/learn/:level" element={<Learn />} />
                <Route path="/learn/:level/:subject" element={<Course />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/hope" element={<Hope />} />

                <Route path="*" element={<NotFound />} />
              </Routes>
              <ToastContainer
                position="top-right"
                autoClose={3000}
                newestOnTop
                closeOnClick
                pauseOnHover
                theme="dark"
                toastStyle={{
                  backgroundColor: 'rgba(30, 41, 59, 0.9)',
                  color: '#cbd5e1',
                  border: '1px solid rgba(168, 169, 255, 0.2)'
                }}
              />
            </main>
          </Router>
        </Theme>
      );
    }

    export default App;