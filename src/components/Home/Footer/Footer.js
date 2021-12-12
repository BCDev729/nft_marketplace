export default function Footer(props) {
  return (
    <>
      <div className="grid grid-cols-3 justify-items-center bg-black-700 text-white p-6">
        <div className="">
          <div className="footer-link">
            <a
              href="https://vaporblitz.gitbook.io/whitepaper/"
              target="_blank"
              rel="noreferrer"
            >
              Whitepaper
            </a>
          </div>
          <div className="footer-link">
            <a
              href="https://bscscan.com/token/0x73f5a4808456f4927ee13cbe76b2b726136ce962"
              target="_blank"
              rel="noreferrer"
            >
              Contract
            </a>
          </div>
        </div>
        <div className="items-center">
          <img alt="" className="w-4/5 mx-auto" src={props.logo} />
        </div>
        <div>
          <p className="text-left mb-2 ml-1">Social</p>
          <div className="flex">
            <a
              href="https://t.me/vaporblitz"
              className="flex items-center text-center w-6 h-6 bg-purple-400 rounded-3xl mr-3"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="" className="p-1.5" src={props.telegram} />
            </a>
            <a
              href="https://discord.gg/fbf86kJn7H"
              className="flex items-center text-center w-6 h-6 bg-pink-300 rounded-3xl"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="" className="p-1.5" src={props.discord} />
            </a>
          </div>
        </div>
      </div>
      <div className="text-white text-center text-sm bg-black-500 py-3">
        <p>2021 © Vaporblitz</p>
      </div>
    </>
  );
}
