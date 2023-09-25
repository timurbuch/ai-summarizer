import {logo} from "../assets"

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center flex-col">
        <img src={logo} alt="logo" className="w-28 object-contain"/>
        <button type="button" onClick={() => window.open("https://github.com")} className="black_btn">Github</button>
      </nav>
      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden"/>
        <span className="orange_gradient"> OpenAI GPT-4</span>
      </h1>
    </header>
  )
}

export default Hero