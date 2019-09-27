## Flow和TypeScript学习

### 一、功能

Flow和TypeScript都是用来做JavaScript的类型检查的

### 二、使用JavaScript进行编程时可能会遇到的问题分析

#### 2.1 JavaScript语言特征介绍(类型)

`JavaScript是一种弱类型的，动态类型检查的语言`

#### 2.2 弱类型和强类型

> 强类型语言是指一个变量一旦被指定了数据类型之后，如果不进过强制转化，那么它就永远都是这个类型的了。
>
> 弱类型语言是指一个变量可以被赋值不同类型的数据。

##### 2.2.1 弱类型

> 在定义变量的时候 我们可以为变量赋值任何数据类型 变量的数据类型不是固定的 这样的类型叫做弱类型

```javascript
var a = 10
a = "abc"
a = []
a = () => {}
a = undefined
```

##### 2.2.2 强类型

> 在声明变量的时候 一旦变量赋值 那么变量的数据类型就已经确定 之后如果要给变量赋值其他类型的数据 需要进行强制数据类型转换

```java
int a = 10;
a = "10"; // err
a = Integer.parseInt("10");
```

#### 2.3 动态类型和静态类型

`动态类型和静态类型的核心区别：动态类型的类型检查会在代码运行时进行，而静态类型的类型检查则是在编译时进行。`

##### 2.3.1 动态类型

>  运行时类型检查
>
> 在运行的时候报错 如JavaScript在运行的时候才会报错

```js
var obj = {}
obj.forEach((v,i) => {
  
}) // err forEach is not Function
```

##### 2.3.2 静态类型

> 编译时类型检查
>
> 在编译的时候就会报错 如java不会通过编译(类型检查失败) 不会运行

```java
int num = 100;
num = "abc"; // err
```

##### 2.3.3 动态类型和弱类型语言带来的问题

> 动态类型，类型检查的操作是在运行时进行的
>
> 代码中的错误，只能在代码运行的时候被发现
>
> 优点：JavaScript中写代码会很随意，但它的灵活性和它带来的风险性也是成正比的。

##### 2.3.4 静态类型和强类型语言的优势

-  提早发现代码中的BUG

  ```js
  /*
  	此时zhangsan这个对象没有sayHello方法 但是只能在运行的时候才会报错 
  	<强类型语言就可以实现不用自己去运行的时候就会提示代码中对应的错误并定位到具体代码>
  */
  function greet(obj) {
    obj.sayHello()
  }
  let zhangsan = {
    name:"张三"
  }
  greet(o)
  ```

- 提高代码的可读性

  ```js
  /*
  	这个求和的函数无法通过代码确认这个实参a,b 是传递数值还是字符串
  	<强类型语言可以在声明变量的时候指定变量的数据类型>
  */
  function sum(a,b){
    return a + b
  }
  ```

- 减少复杂的错误处理逻辑

  ```js
  /*
  	函数接受一个数字数组作为参数 返回这个函数中所有数字相加的和
  	<强类型语言可以给形参和函数返回值制定数据类型>
  */
  function sum(arr){
    if(!arr){
      throw new Error("函数需要传递参数")
    }
    if(!Array.isArray(arr)){
      throw new Error("函数需要一个数组作为参数")
    }
    // every() 测试一个数组内的所有元素是否都能通过某个指定函数的测试 返回一个布尔值
    if(!arr.every(v => typeof v == "number")){
      throw new Error("函数需要的数组为数字数组")
    }
    let result = 0
    arr.forEach(v => result += v)
    return result
  }
  sum([1,2,3])
  
  sum()
  sum(100)
  sum(['a','b'])
  ```

- 便于代码的重构

  ```js
  /*
  	<强类型语言当修改函数的参数类型时会提示定位到代码中的具体调用位置>
  */
  function test(obj){
    console.log(obj.name)
  }
  test({name:"蓝海"})
  
  test({name:"蓝海"})
  test({name:"蓝海"})
  test({name:"蓝海"})
  ```

- 增强IDE的功能

  `IDE：集成开发环境`

#### 2.4 静态类型存在的问题

1. 会增加代码量
2. 需要花时间掌握类型
3. 可能会降低开发效率

#### 2.5 如何在JavaScript开发中使用静态类型

1. Flow：FaceBook的开源技术
2. TypeScript：微软公司开发的语言

### 三、Flow的基本使用步骤

#### 3.1 安装

```shell
npm init -y ·创建package.json文件·
npm i flow-bin -D ·将flow下载至本地项目中·
```

