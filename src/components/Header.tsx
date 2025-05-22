export default function Header() {
  return (
    <header className="relative w-full h-screen flex items-center bg-gray-900 text-white px-10">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center py-5 px-10 z-10">
        <div className="text-lg font-bold">Logo</div>
        <ul className="flex gap-8">
          <li>
            <a href="#" className="hover:text-gray-400">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-400">About</a>
          </li>
          <li>
            <a href="#services" className="hover:text-gray-400">Services</a>
          </li>
        </ul>
        <button className="bg-purple-500 text-white px-4 py-2 hover:bg-purple-600 transition">
          Contact Us
        </button>
      </nav>

      {/* Conteúdo principal */}
      <div className="w-1/2 space-y-6">
        <h1 className="text-6xl font-bold">I'm <br /> Tábata Macedo</h1>
        <p className="text-gray-300">
          I’m <span className="font-bold text-white">web developer</span> based in Brazil who loves creating engaging web experiences.
        </p>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 bg-purple-500 px-5 py-3  text-white hover:bg-purple-600 transition">
            📧 Email me
          </button>
          <a href="#" className="flex items-center gap-2 text-white hover:text-purple-400 transition">
            ⬇ Download CV
          </a>
        </div>
      </div>

      {/* Imagem do lado direito */}
      <div className="absolute top-0 right-0 w-1/2 h-full">
        <img
          src="/img/perfil.jpg"
          alt="Tábata Macedo"
          className="w-full h-full object-cover filter brightness-50" 
        />
      </div>
    </header>
  );
}
