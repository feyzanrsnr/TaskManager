import React,{useState, useEffect} from "react";
import * as S from "./styles";
import { FaRedo } from 'react-icons/fa';

function PomodoroPageContainer() {
    const [timer, setTimer] = useState(25 * 60);
    const [isActive, setIsActive] = useState(false);
    const [timerMode, setTimerMode] = useState('pomodoro');
    const [buttonText, setButtonText] = useState('START');
    const [activeButton, setActiveButton] = useState('pomodoro');


    //zamanlayıcıyı her saniyede bir güncelleme
    useEffect(() => {
      let interval;
      if(isActive){
        interval = setInterval(() => {
          setTimer((prevTimer) => prevTimer - 1);
        },1000);
        }else{
          clearInterval(interval);
        }

        return () => clearInterval(interval);
      },[isActive]);

      //süreyi dakika : saniye formatında göstermek
      const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
      }

      //mod değiştirme
      const handleModeChange = (mode) => {
        setTimerMode(mode);
        setActiveButton(mode);
        if(mode === 'pomodoro'){
          setTimer(25 * 60);
        }
        else if (mode === 'short-break'){
          setTimer(5 * 60);
        }
        else if(mode === 'long-break'){
          setTimer(15 * 60);
        }

        setIsActive(false);//mod değiştirildiğinde zamanlayıcıyı durdurur
        setButtonText('START');
      }

      const handleStartStop = () => {
        setIsActive(!isActive);
        setButtonText(isActive ? 'START' : 'STOP');
      }

      const handleRestart = () => {
        if (timerMode === 'pomodoro') {
          setTimer(25 * 60); // Pomodoro için 25 dakika
        } else if (timerMode === 'short-break') {
          setTimer(5 * 60); // Kısa mola için 5 dakika
        } else if (timerMode === 'long-break') {
          setTimer(15 * 60); // Uzun mola için 15 dakika
        }
        setIsActive(false); // Zamanlayıcıyı durdur
        setButtonText('START'); // Buton metnini 'Start' yap
      }
      

  return (
    <S.PomodoroPageContainer>

      <S.FlexDiv>
        <S.TimerButton isActive={activeButton === 'pomodoro'} onClick={() => handleModeChange('pomodoro')}>pomodoro</S.TimerButton>
        <S.TimerButton isActive={activeButton === 'short-break'} onClick={() => handleModeChange('short-break')}>short break</S.TimerButton>
        <S.TimerButton isActive={activeButton === 'long-break'} onClick={() => handleModeChange('long-break')}>long break</S.TimerButton>
      </S.FlexDiv>
      
      <S.Text>{formatTime(timer)}</S.Text>
      
      <S.FlexDiv>
      <S.BasicButton 
      onClick={handleStartStop}>
        {buttonText}
      </S.BasicButton>

      <S.RestartButton onClick={handleRestart}>
        <FaRedo />
      </S.RestartButton>
      </S.FlexDiv>
          
    </S.PomodoroPageContainer>
  );
}

export { PomodoroPageContainer };