# 组态图编辑器设计规约

## 图元数据绑定

**所有数据绑定属性约定以 `node.` 前缀开头，防止与原生属性冲突（下文的属性名均省略了前缀）。** 例如 `node.cate`, `node.name`, `node.value`。

图元状态的变化通过接收测点数据，并在图元的相关组件内通过 `__ht__function` 解析数据，改变该组件的颜色，大小，宽高，方向，位置，旋转角度等属性来实现图元的状态变化。

### 名称

主要用于图元的命名与区分。

属性名为 `name`。

```
{
  "attr": "node.name",
  "valueType": "String",
  "defaultValue": "switch"
}
```


### 测点

图元进行数据绑定与处理的必需属性，无须在图元文件中显式声明，通过编辑器进行配置。

在生产环境中，会有专用的方法收集各图元的测点配置，并请求接口数据。接收到数据返回后，会进行统一的预处理，然后将处理后的数据赋值给每个测点图元内用于同步测点数据的属性。

属性名为 `tag`。

> 多测点配置
> 
> 如果出现一个图元需要配置多个测点的，需要在 `tag` 属性后进行扩展。
> 
> 如：`node.tag.cw`
> 
> 相应的，需要在预处理函数中对该属性额外处理。

测点图元统一配置：属性 `cate` 为 `m-point`。
```
{
  "attr": "node.cate",
  "valueType": "String",
  "defaultValue": "m-point"
}
```

### 颜色

颜色配置通常用于结合测点数据进行变化。

属性名为 `color`，可以提供一个默认值，用于无数据状态下的展示。

```
{
  "attr": "node.color",
  "valueType": "Color",
  "defaultValue": "rgb(255,0,0)"
}
```

如果出现一个图元需要配置多组颜色变化的情况，参考上文[多测点配置](#测点)对 `color` 属性进行扩展。

### 常见图元

#### 文本类

统一配置：属性 `type` 为 `text`。

```
{
  "attr": "node.type",
  "valueType": "String",
  "defaultValue": "text"
},
```

模板 Label 配置，用于规范数据展示形式（改变内容，规定小数位数等）。
```
{
  "attr": "node.label",
  "valueType": "String",
  "defaultValue": "###.#",
  "name": "数据值"
}
```

#### 开关量类

用于类似开关，断路器，光字牌等布尔值图元

统一配置：属性 `type` 为 `switch`，属性 `state` 用于同步测点数据。

```
{
  "attr": "node.type",
  "valueType": "String",
  "defaultValue": "switch"
},
{
  "attr": "node.state",
  "valueType": "Boolean",
  "name": "状态值",
  "defaultValue": false
}
```

#### 数值类

用于两种以上数据的信号量，以及阀门，泵等数据在一定范围内浮动的图元。

统一配置：属性 `value` 用于同步测点数据。

```
{
  "attr": "node.value",
  "valueType": "Number",
  "defaultValue": 50
}
```

常用约定：

阀门类属性 `type` 为 `valve`；

泵类属性 `type` 为 `pump`；

电机类属性 `type` 为 `motor`；


#### 复杂类

统一配置：属性 `data` 用于同步测点数据。

用于一个图元内需要处理多位二进制数据等复杂情况。

例如：
```
{
  "attr": "node.data",
  "valueType": "Array",
  "name": "状态值",
  "defaultValue": [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0]
}
```
