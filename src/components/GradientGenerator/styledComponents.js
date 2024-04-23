// Style your elements here
import styled from 'styled-components/macro'

export const GradientGeneratorContainer = styled.div`
  display: flex;
  justify-content: column;
  align-item: center;
  background-image: linear-gradient(${props => props.gradientValue});
  min-height: 100vh;
`
export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 550px;
  @media screen and (min-width: 768px) {
    width: 85%;
    max-width: 1110px;
  }
`
export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: bold;
  text-align: center;
  font-size: 24px;
  @media screen and (min-width: 768px) {
    font-size: 34px;
  }
`
export const DirectionDescription = styled.p`
  color: #ededec;
  font-family: 'Roboto';
  font-weight: 500px;
  font-size: 22px;
  line-height: 1.5;
`
export const GradientDirectionList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0;
  @media screen and (min-width: 768px) {
    width: 68%;
    max-width: 425px;
  }
`
export const ColorsPickersDescription = styled.p`
  color: #ededec;
  font-family: 'Roboto';
  font-weight: 500px;
  font-size: 22px;
  line-height: 1.5;
`
export const ColorPickerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  min-width: 320px;
`
export const CustomInputAndColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ColorValue = styled.p`
  color: #ffffff;
  font-weight: 500px;
  font-size: 18px;
`
export const CustomInput = styled.input`
  width: 100px;
  height: 50px;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
`
export const GenerateButton = styled.button`
  text-align: center;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  background-color: #0bc907;
  min-width: 25px;
  border-radius: 6px;
  border: none;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 24px;
  margin-bottom: 10px;
  margin-left: 0px;
  margin-top: 25px;
  outline: none;
  cursor: pointer;
`
