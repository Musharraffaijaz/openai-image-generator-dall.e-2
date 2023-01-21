import logo from './logo.svg';
import { Configuration, OpenAIApi } from 'openai'
import './index.css';
import { useState } from 'react';

function App() {

  const [prompt, setPrompt] = useState('');
  const[result, setResult]= useState('');

const configuration = new Configuration({
  apiKey: "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",
}) ;

const openai = new OpenAIApi(configuration);

const generateImage = async ()=>{
const res = await openai.createImage({
  prompt: prompt,
  n: 1,
  size: "1024x1024",
});
setResult(res.data.data[0].url);
setPrompt('');

}
console.log(setResult)
  return (
<>
 <div className="App">
<div className='main-div'>
<input onChange={(e)=>{setPrompt(e.target.value)}} placeholder='Generate your Imaginations into Images' />
<button onClick={generateImage}>Generate Image</button>


</div>
<h6 style={{textDecoration: "line-through", textAlign: "center", marginTop: "-2%"}}>Musharaf Aijaz</h6>
    </div>
    <div className='img-div'>
 {result.length > 0 ?  <img className='result-image' src={result} alt="Generated Image"/> : <></>}
</div>
</>
  );
}

export default App;
