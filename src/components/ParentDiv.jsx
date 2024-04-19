import React,{useState} from 'react'
import Badge from './Badge'
import RadioGroup from './RadioPercentGroup'
export default function ParentDiv() {
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };

  return (
    <div>
    <RadioGroup selectedValue={selectedValue} handleChange={handleChange}/>
    <Badge selectedValue={selectedValue}/>
    </div>
  )
}
