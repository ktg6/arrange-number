$(document).ready(function() {
	var canvas = $("#gameCanvas");
	var context = canvas.get(0).getContext("2d");

	// キャンバスのサイズ
	var canvasWidth = canvas.width();
	var canvasHeight = canvas.height();

	// ゲームの設定
	var playGame;

	// ゲームのUI
	var ui = $("#gameUI");
	var uiIntro = $("#gameIntro");
	var uiStats = $("#gamestats");
	var uiComplete = $("#gameComplete");
	var uiPlay = $("#gamePlay");
	var uiReset = $(".gameReset");
	var uiScore = $(".gameScore");
	var uiTable = $("#table");
	var uiTime = $("#showtime");
	var uiBack = $("#gameBack");
	var uiStart = $("#start");
	var uiClear = $("#clearmain");
	var example = $("#example");

	// ゲームをリセット、開始する
	function startGame() {
		// ゲームスコアをリセットする
		uiScore.html("0");
		uiStats.show();

		//　ゲームを初期化する
		playGame = false;

		// アニメーションループを開始する
		animate();
	};

	// ゲーム環境を初期化する
	function init() {
		uiStats.hide();
		uiTable.hide();
		uiTime.hide();
		uiBack.hide();
		uiStart.hide();
		uiClear.hide();
		example.hide();
		uiComplete.hide();

		uiPlay.click(function(e) {
			e.preventDefault();
			uiIntro.hide();
			example.show();
			uiBack.show();
			uiStart.show();
		});

		uiStart.click(function(e) {
			example.hide();
			uiTable.show();
			uiTime.show();
		});

		uiBack.click(function(e) {
			location.reload();
		});

		uiComplete.click(function(e) {
			uiBack.hide();
			uiStart.hide();
			uiTable.hide();
			uiTime.hide();
			uiClear.show();
		});
	};

	// アニメーションループ
	
	function animate() {
		// クリア
		context.clearRect(0,0, canvasWidth, canvasHeight);

		if (playGame) {
			// 33ミリ秒後に再びアニメーションループを実行する
			setTimeout(animate, 33);
		};
	};

	init();

	});