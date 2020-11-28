import React, {useEffect, useState} from 'react'
import Select from 'react-select'
import {ISelectItem} from '../../types'


type Props = {
  label?: string
  items: ISelectItem[]
  inits: ISelectItem[] | any[]
  value: any[]
  errors?: string[] | string
  onChange: (val: string | number | any[]) => {}
}

export const MultiSelect = (props: Props) => {
  const [vals, setVals] = useState<any[]>([])
  const [valInits, setValInits] = useState<any[]>([...props.inits])
  const {label, items, value, errors, onChange} = props

  useEffect(() => {
    setVals([])
  }, [valInits])

  useEffect(() => {
    onChange(valInits)
  }, [valInits])

  const _onChange = (values: any[]) => {
    setValInits([...valInits, ...values])
  }

  const removeItem = (item: ISelectItem) => {
    const newInits = valInits.filter(i => i.title !== item.label)
    setValInits(newInits)
  }

  return (
    <div className="form-group row">
      <label className="col-md-3 m-t-15">{label}</label>
      <div className="col-md-12">
        <Select
          isMulti
          value={vals}
          defaultValue={{ label: "Select Dept", value: 0 }}
          onChange={(values) => _onChange(values)}
          options={items}/>
      </div>
      {valInits.length > 0 && (
        <div className={'col-md-12'}>
          <div className="chat-box scrollable ps-container ps-theme-default ps-active-y">
            <ul className="chat-list">
              <li className="chat-item">
                <div className="chat-content p-l-0">
                  {valInits.map((v, i) => (
                    <div key={i} className={`box bg-light-info p-r-30  ${i > 0 ? 'm-l-10' : ''}`}>
                      {v.title}
                      <span
                        className={'text-danger m-l-5'}
                        style={{cursor: 'pointer'}}
                        onClick={() => removeItem(v)}
                      ><i className="mdi mdi-close"/></span>
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default MultiSelect
