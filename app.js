const state = {
  view: 'tasks',
  taskName: '新用户引导流程',
  taskStatus: '评审中',
  score: 88,
  runCount: 0,
  controls: ['文本输入', '选择器', '主按钮'],
  tasks: [
    {name:'新用户引导流程', desc:'从注册到完成首个项目的关键路径', status:'评审中', steps:3, updated:'刚刚'},
    {name:'创建项目', desc:'完成项目基础信息和权限配置', status:'已发布', steps:3, updated:'今天 10:42'},
    {name:'邀请协作者', desc:'通过邮件邀请团队成员加入', status:'草稿', steps:3, updated:'昨天'},
    {name:'导出分析报告', desc:'选择范围并生成可分享报告', status:'已发布', steps:3, updated:'10月 18日'}
  ]
};

const icons = {plus:'＋', play:'▶', spark:'✦', check:'✓', arrow:'→', dot:'•'};

function pageHeader(kicker, title, description, action) {
  return '<div class="page-heading"><div><div class="eyebrow">'+kicker+'</div><h1>'+title+'</h1><p>'+description+'</p></div><div class="button-row">'+(action || '')+'</div></div>';
}
function panel(title, body, extra='') {
  return '<section class="panel '+extra+'"><div class="panel-header"><h2>'+title+'</h2></div><div class="panel-body">'+body+'</div></section>';
}
function taskView() {
  return pageHeader('PRODUCT WORKSPACE / 任务', '任务编辑器', '把一个产品目标拆成可执行的功能、动线与界面。', '<button class="secondary-button" data-action="save">↥ 保存版本</button><button class="primary-button" data-action="run-all">'+icons.play+' 运行双 Agent</button>')+
  '<div class="task-layout"><div class="stack">'+
    '<div class="task-summary"><div class="panel-tag tag-teal">TASK · TASK-004</div><h3>'+state.taskName+'</h3><p>帮助新用户在 3 个动作内完成第一个项目创建，减少首次使用的认知负担。</p><div class="task-meta"><span>负责人 <b>林间工作室</b></span><span>状态 <b>'+state.taskStatus+'</b></span><span>最近更新 <b>刚刚</b></span></div></div>'+
    panel('任务函数 <small>Algorithm 1 · Function mapping</small>', '<div class="formula-box"><div class="formula-label">OUTPUT MAPPING</div><em>out</em> = <span>m</span>(<em>a1</em>, <em>a2</em>, <em>input</em>)</div><div class="formula-help">a 为功能 · input 为用户输入 · out 为任务结果</div><div class="agent-grid" style="margin-top:15px"><div class="agent-card production"><div class="agent-top"><div class="agent-avatar">产</div><div><strong>生产 Agent</strong><small>Product Builder</small></div><span class="agent-status">● 工作中</span></div><p class="agent-copy">已将“创建项目”与“快速邀请”映射到 a1、a2，等待评审确认。</p><div class="agent-action"><span>最近输出 · 2 分钟前</span><button class="link-button" data-action="generate">生成下一版 '+icons.arrow+'</button></div></div><div class="agent-card review"><div class="agent-top"><div class="agent-avatar">审</div><div><strong>评审 Agent</strong><small>UI Reviewer</small></div><span class="agent-status">● 待评审</span></div><p class="agent-copy">检查任务目标、动线步数与界面组合，输出 score(Q) 和修改建议。</p><div class="agent-action"><span>上次评审 · 88 / 100</span><button class="link-button" data-action="review">开始评审 '+icons.arrow+'</button></div></div></div>')+
    panel('动线 K <small>Algorithm 1 · Action path</small>', '<div class="formula-box"><div class="formula-label">DONE CONDITION · 目标步数 t = 3</div><em>done</em> = <span>a</span>(<em>p1</em>, <em>p2</em>, <em>pt</em>)</div><div class="flow-rail" style="margin-top:17px"><div class="flow-node active"><span class="step-index">p1 / STEP 01</span><strong>输入项目名称</strong><p>文本输入控件<br/>完成必要信息</p></div><div class="flow-arrow">→</div><div class="flow-node active"><span class="step-index">p2 / STEP 02</span><strong>选择模板</strong><p>选择器控件<br/>确定启动方式</p></div><div class="flow-arrow">→</div><div class="flow-node active"><span class="step-index">pt / STEP 03</span><strong>创建项目</strong><p>主按钮控件<br/>得到 out</p></div></div><div class="flow-note"><b>t = 3</b><span>符合任务约束。超过 3 步将自动标记为需优化。</span></div>'),
    panel('任务结果 <small>Output preview</small>', '<div class="signal-strip"><div><small>当前输出 out</small><br/><span>项目空间已创建</span></div><strong>m(3)</strong></div><div class="metric-row"><span>目标完成率</span><b class="pass">100%</b></div><div class="metric-row"><span>动线步数</span><b class="pass">3 / 3</b></div><div class="metric-row"><span>待处理问题</span><b class="warn">1 条</b></div>')
  +'</div><div class="stack right-column">'+
    panel('界面评审 <small>Algorithm 2 · UI Review</small>', '<div class="signal-strip"><div><small>组合评分 score(Q)</small><br/><span>可发布阈值 ≥ 80</span></div><strong id="score-value">'+state.score+'</strong></div><div class="metric-row"><span>层级清晰度</span><b class="pass">92</b></div><div class="metric-row"><span>操作可发现性</span><b class="pass">86</b></div><div class="metric-row"><span>认知负担</span><b class="pass">84</b></div><div class="metric-row"><span>反馈完整度</span><b class="warn">71</b></div><button class="secondary-button" style="width:100%;justify-content:center;margin-top:13px" data-action="review">运行 UI 评审 '+icons.arrow+'</button>'),
    panel('控件组成 <small>Q = f1 + f2 + f3</small>', '<div class="control-list"><div class="control-item"><div class="control-swatch">T</div><div><strong>文本输入</strong><small>f1 · 项目名称</small></div><span class="mini-pill">必填</span></div><div class="control-item"><div class="control-swatch">⌄</div><div><strong>选择器</strong><small>f2 · 项目模板</small></div><span class="mini-pill">单选</span></div><div class="control-item"><div class="control-swatch">↗</div><div><strong>主按钮</strong><small>f3 · 创建项目</small></div><span class="mini-pill">主要操作</span></div></div><div class="formula-box" style="margin-top:15px;padding:13px 14px;font-size:13px"><em>Q</em> = (f1, f2, f3)</div>'),
    panel('评审意见 <small>Review Agent note</small>', '<div class="review-list"><li>主操作按钮文案明确，建议保留。</li><li>第三步反馈需要增加成功状态。</li><li>当前 score(Q) = '+state.score+'，达到发布阈值。</li></div>')
  +'</div></div>';
}
function projectView() {
  return pageHeader('PRODUCT WORKSPACE / 项目','项目','集中管理产品目标、任务版本与协作 agent。','<button class="primary-button" data-action="new-project">'+icons.plus+' 新建项目</button>')+
  panel('我的项目 <small>3 个活跃项目</small>', '<table class="table-like"><thead><tr><th>项目</th><th>任务</th><th>状态</th><th>更新时间</th><th></th></tr></thead><tbody><tr><td><strong>栖木协作空间</strong><br/><small class="muted">面向小型团队的项目协作工具</small></td><td>04</td><td><span class="status-badge">进行中</span></td><td>刚刚</td><td><button class="link-button" data-view="tasks">打开 '+icons.arrow+'</button></td></tr><tr><td><strong>客户洞察看板</strong><br/><small class="muted">把访谈素材整理成行动建议</small></td><td>08</td><td><span class="status-badge">进行中</span></td><td>昨天</td><td><button class="link-button">打开 '+icons.arrow+'</button></td></tr><tr><td><strong>营销落地页</strong><br/><small class="muted">春季招募活动页面</small></td><td>03</td><td><span class="status-badge draft">草稿</span></td><td>10月 18日</td><td><button class="link-button">打开 '+icons.arrow+'</button></td></tr></tbody></table>');
}
function tasksView() {
  return pageHeader('PRODUCT WORKSPACE / 任务','任务','用算法拆解目标，用动线与界面完成交付。','<button class="primary-button" data-action="new-task">'+icons.plus+' 新建任务</button>')+
  panel('全部任务 <small>按最近更新排序</small>', '<table class="table-like"><thead><tr><th>任务名称</th><th>目标</th><th>动线</th><th>状态</th><th>更新</th><th></th></tr></thead><tbody>'+state.tasks.map((t,i)=>'<tr><td><strong>'+t.name+'</strong></td><td>'+t.desc+'</td><td><span class="panel-tag tag-lime">t = '+t.steps+'</span></td><td><span class="status-badge '+(t.status==='草稿'?'draft':t.status==='评审中'?'review':'')+'">'+t.status+'</span></td><td>'+t.updated+'</td><td><button class="link-button" data-action="open-task">编辑 '+icons.arrow+'</button></td></tr>').join('')+'</tbody></table>');
}
function formsView() {
  return pageHeader('PRODUCT WORKSPACE / 任务配置表单','任务配置表单','把算法输入、功能参数与评审规则固化为可复用表单。','<button class="primary-button" data-action="save">保存表单</button>')+
  '<div class="config-layout">'+panel('新用户引导流程 · 配置','<div class="field-row"><div class="field"><label>任务名称</label><input value="新用户引导流程"/></div><div class="field"><label>目标步数 t</label><input value="3" type="number" min="1" max="3"/></div></div><div class="field"><label>任务目标</label><input value="帮助新用户在 3 个动作内完成第一个项目创建"/></div><div class="field"><label>输入 input</label><input value="项目名称、项目模板"/></div><div class="toggle-row"><span>强制执行 3 步动线</span><span class="toggle"><i></i></span></div><div class="toggle-row"><span>完成后触发评审 Agent</span><span class="toggle"><i></i></span></div>','')+
  panel('功能映射 <small>a = functions</small>','<div class="control-list"><div class="control-item"><div class="control-swatch">a1</div><div><strong>创建项目</strong><small>写入项目基础信息</small></div><span class="mini-pill">已绑定</span></div><div class="control-item"><div class="control-swatch">a2</div><div><strong>快速邀请</strong><small>生成协作者邀请入口</small></div><span class="mini-pill">已绑定</span></div><button class="secondary-button" style="width:100%;justify-content:center;margin-top:12px" data-action="add-feature">'+icons.plus+' 添加功能</button>','')+'</div>';
}
function controlsView() {
  return pageHeader('PRODUCT WORKSPACE / 控件','控件','建立可以被界面组合 Q 复用的控件资产。','<button class="primary-button" data-action="new-control">'+icons.plus+' 新建控件</button>')+
  panel('控件库 <small>12 个可用控件</small>','<div class="control-picker">'+['文本输入','选择器','主按钮','步骤条','状态提示','上传区域'].map((x,i)=>'<button class="picker-option '+(i<3?'selected':'')+'" data-action="select-control"><div class="picker-icon">'+['T','⌄','↗','01','✓','↑'][i]+'</div><strong>'+x+'</strong><small>f'+(i+1)+' · 可复用</small></button>').join('')+'</div>');
}
function flowsView() {
  return pageHeader('PRODUCT WORKSPACE / 动线','动线','用可验证的操作路径，把目标压缩到最少的步骤。','<button class="primary-button" data-action="new-flow">'+icons.plus+' 新建动线</button>')+
  panel('新用户引导 · K','<div class="formula-box"><div class="formula-label">ACTION PATH</div><em>done</em> = <span>a</span>(<em>p1</em>, <em>p2</em>, <em>pt</em>)</div><div class="flow-rail" style="margin-top:20px"><div class="flow-node active"><span class="step-index">p1</span><strong>输入项目名称</strong><p>使用文本输入</p></div><div class="flow-arrow">→</div><div class="flow-node active"><span class="step-index">p2</span><strong>选择模板</strong><p>使用选择器</p></div><div class="flow-arrow">→</div><div class="flow-node active"><span class="step-index">pt</span><strong>创建项目</strong><p>使用主按钮</p></div></div><div class="flow-note"><b>t = 3 / 3</b><span>动线满足当前任务约束，可提交 UI 评审。</span></div>');
}
function featuresView() {
  return pageHeader('PRODUCT WORKSPACE / 功能','功能','将任务目标拆解成可绑定的功能单元 a。','<button class="primary-button" data-action="add-feature">'+icons.plus+' 新建功能</button>')+
  panel('功能清单 <small>a = action / capability</small>','<table class="table-like"><thead><tr><th>标识</th><th>功能</th><th>说明</th><th>绑定任务</th><th>状态</th></tr></thead><tbody><tr><td><span class="panel-tag tag-teal">a1</span></td><td><strong>创建项目</strong></td><td>写入项目基础信息并生成空间</td><td>新用户引导流程</td><td><span class="status-badge">已启用</span></td></tr><tr><td><span class="panel-tag tag-teal">a2</span></td><td><strong>快速邀请</strong></td><td>通过邮件添加首位协作者</td><td>新用户引导流程</td><td><span class="status-badge">已启用</span></td></tr><tr><td><span class="panel-tag tag-orange">a3</span></td><td><strong>导出报告</strong></td><td>将分析结果生成可分享文件</td><td>导出分析报告</td><td><span class="status-badge draft">规划中</span></td></tr></tbody></table>');
}
function interfacesView() {
  return pageHeader('PRODUCT WORKSPACE / 界面','界面','将控件组合成 Q，并用 B(Q1,Q2) 评审界面质量。','<button class="primary-button" data-action="new-interface">'+icons.plus+' 新建界面</button>')+
  '<div class="interface-layout">'+panel('Q1 · 新用户引导','<div class="mock-ui"><div class="mock-top"></div><div class="mock-row"></div><div class="mock-row short"></div><div class="mock-control">创建项目 · 主要操作</div></div><div class="score-display"><b>88</b><span>/ 100 · score(Q1)</span></div><div class="score-bar"><i></i></div><ul class="review-list"><li>层级清晰，主按钮突出</li><li>3 步状态反馈完整</li></ul>')+
  panel('Q2 · 空状态引导','<div class="mock-ui" style="background:#f0f7ef;color:#35694d"><div class="mock-top" style="background:#9accaa"></div><div class="mock-row" style="background:#d4e8d7"></div><div class="mock-row short" style="background:#d4e8d7"></div><div class="mock-control">开始创建第一个项目</div></div><div class="score-display"><b>84</b><span>/ 100 · score(Q2)</span></div><div class="score-bar"><i style="width:84%"></i></div><ul class="review-list"><li>文案清楚，降低起步压力</li><li>建议增加模板预览</li></ul>')+'</div><div class="panel" style="margin-top:20px"><div class="panel-header"><h2>界面组合评审 <small>B(Q1,Q2) → m</small></h2><button class="primary-button" data-action="review">运行组合评审 '+icons.play+'</button></div><div class="panel-body"><div class="signal-strip"><div><small>Review Agent 输出</small><br/><span>Q1、Q2 的组合满足任务目标</span></div><strong>86</strong></div><p class="empty-note" style="margin:0">组合结果 m 将用于任务发布前的最后一次 UI 评审。当前建议：保留 Q1 的主按钮层级，将 Q2 的模板预览能力合并到第一步。</p></div></div>';
}
function render(view=state.view) {
  state.view=view;
  const content={project:projectView,tasks:taskView,forms:formsView,controls:controlsView,flows:flowsView,features:featuresView,interfaces:interfacesView}[view] || taskView;
  document.getElementById('view-content').innerHTML=content();
  document.querySelectorAll('.nav-item[data-view]').forEach(b=>b.classList.toggle('active',b.dataset.view===view));
  document.getElementById('crumb-current').textContent={project:'项目',tasks:'任务',forms:'任务配置表单',controls:'控件',flows:'动线',features:'功能',interfaces:'界面'}[view] || '任务';
}
function toast(message) {
  const el=document.getElementById('toast');el.textContent=message;el.classList.add('show');clearTimeout(window.__toast);window.__toast=setTimeout(()=>el.classList.remove('show'),2400);
}
function runReview() {
  state.runCount++; state.score=Math.min(96,88+state.runCount*2); render('tasks'); toast('评审 Agent 已完成：score(Q) = '+state.score+'，达到发布阈值。');
}
document.addEventListener('click', (event)=>{
  const nav=event.target.closest('[data-view]'); if(nav){render(nav.dataset.view);return;}
  const action=event.target.closest('[data-action]')?.dataset.action; if(!action)return;
  if(action==='run-all'){runReview();return}
  if(action==='review'){runReview();return}
  if(action==='generate'){toast('生产 Agent 已生成一版新的任务函数映射。');document.getElementById('save-label').textContent='正在保存…';setTimeout(()=>document.getElementById('save-label').textContent='所有更改已保存',700);return}
  if(action==='save'){toast('版本已保存，可交给评审 Agent。');return}
  if(action==='open-task'){render('tasks');toast('已打开任务编辑器。');return}
  if(action==='new-task'||action==='new-project'||action==='new-flow'||action==='new-control'||action==='new-interface'||action==='add-feature'){toast('已创建草稿，生产 Agent 等待补充信息。');return}
  if(action==='select-control'){event.target.closest('.picker-option').classList.toggle('selected');toast('控件已加入界面组合 Q。');return}
});
render('tasks');

