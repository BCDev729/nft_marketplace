export default function DetailText(props) {
  let text;
  if (props.color === "green") {
    text = <p className="text-lg text-green">{props.text}</p>;
  } else if (props.multi && !props.underline) {
    text = (
      <p className="text-base text-white mb-2 leading-tight">
        {props.text1}
        <br />
        {props.text2}
      </p>
    );
  } else if (props.multi && props.underline) {
    text = (
      <p className="text-base text-white mb-2 leading-tight">
        {props.text1}
        <br />
        <a
          href="https://mudra.website/?certificate=yes&type=0&lp=0xc7620ee6e38bb21eeafe492ffa14b8dbd090f395"
          className="underline"
          target="_blank"
          rel="noreferrer"
        >
          {props.text2}
        </a>
      </p>
    );
  } else {
    text = <p className="text-base text-white mb-2">{props.text}</p>;
  }

  return <>{text}</>;
}
