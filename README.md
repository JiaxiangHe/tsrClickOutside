# tsrClickOutside
detect click outside a component based on Typescript React

Usage:
import { ClickOutside } from "${your path}";
<ClickOutside wrapperElement="div" className="click-zone" onClickOutside={} onClick={}>
  <div className="demo">
      Inside
  </div>
</ClickOutside>

wrapperElement: string, optional, default "div", the wrapper element type for component.
className: string, optional, class for component wrapper.
onClickOutside: fun, optional, the function excute after clikc outside the component.
onClick: fun, optional, the function excute after clikc inside the component.
