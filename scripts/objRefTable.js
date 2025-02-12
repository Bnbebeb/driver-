const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Sprite,
		C3.Behaviors.EightDir,
		C3.Behaviors.solid,
		C3.Behaviors.Bullet,
		C3.Plugins.Text,
		C3.Plugins.Sprite.Cnds.CompareY,
		C3.Plugins.Sprite.Exps.Y,
		C3.Behaviors.EightDir.Acts.SimulateControl,
		C3.Plugins.Sprite.Cnds.CompareX,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Sprite.Cnds.IsOutsideLayout,
		C3.Plugins.Sprite.Acts.SetPos
	];
};
self.C3_JsPropNameTable = [
	{ТайловыйФон: 0},
	{"8Направлений": 0},
	{Твёрдый: 0},
	{игрок: 0},
	{враг: 0},
	{Пуля: 0},
	{мяч: 0},
	{бнбебеб: 0},
	{бнбебеб2: 0},
	{очки_игрока: 0},
	{Очки_врага: 0},
	{Очки_игрока: 0},
	{очки_врага: 0}
];

self.InstanceType = {
	ТайловыйФон: class extends self.ITiledBackgroundInstance {},
	игрок: class extends self.ISpriteInstance {},
	враг: class extends self.ISpriteInstance {},
	мяч: class extends self.ISpriteInstance {},
	бнбебеб: class extends self.ISpriteInstance {},
	бнбебеб2: class extends self.ISpriteInstance {},
	очки_игрока: class extends self.ITextInstance {},
	Очки_врага: class extends self.ITextInstance {}
}