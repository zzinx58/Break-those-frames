function pipeForFuncs(funcs: Array<Function>): Function {
  function callback<U>(input: U, func: Function): Function {
    return func(input);
  }

  return function (param: any) {
    return funcs.reduce(callback, param);
  };
}

// curry 函数借助 Function.length 读取函数元数
export function autoCurryForFunc(func: Function) {
  let arity = func.length;
  // 定义一个递归式 generateCurried
  //类型变量(T): generateCurried<T>, T帮助我们捕获用户传入的类型（比如：number），之后我们就可以使用这个类型。
  function generateCurried<T>(prevArgs: Array<T>): Function {
    // generateCurried 函数必定返回一层嵌套
    return function curried(nextArg: T) {
      // 统计目前“已记忆”+“未记忆”的参数
      const args = [...prevArgs, nextArg];
      // 若 “已记忆”+“未记忆”的参数数量 >= 回调函数元数，则认为已经记忆了所有的参数
      if (args.length >= arity) {
        // 触碰递归边界，传入所有参数，调用回调函数
        return func(...args);
      } else {
        // 未触碰递归边界，则递归调用 generateCurried 自身，创造新一层的嵌套
        return generateCurried(args);
      }
    };
  }
  // 调用 generateCurried，起始传参为空数组，表示“目前还没有记住任何参数”
  return generateCurried([]);
}

function getStringSize(ctx: CanvasRenderingContext2D, str: string) {
  return ctx.measureText(str);
}
