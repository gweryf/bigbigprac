

export default function Home() {
  return (
    <div>
      <button className="btn">Button</button>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Remember me</span>
          <input type="checkbox" className="toggle" checked />
        </label>
      </div>
    </div>
  )
}
