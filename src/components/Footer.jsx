const Footer = () => {
  return (    
    <footer className="absolute bottom-0 w-full bg-[#0f172a] py-4 px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo & Copyright */}
        <div className="flex flex-col md:flex-row items-center md:gap-6 gap-2">
          <h2 className="text-xl font-black tracking-tighter text-indigo-500"> RouterX</h2>
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">
            © 2024 All Rights Reserved.
          </p>
        </div>

        {/* Minimal Links */}
        <div className="flex space-x-8 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
          <span className="hover:text-indigo-400 cursor-pointer transition duration-300">Privacy</span>
          <span className="hover:text-indigo-400 cursor-pointer transition duration-300">Terms</span>
          <span className="hover:text-indigo-400 cursor-pointer transition duration-300">Support</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
