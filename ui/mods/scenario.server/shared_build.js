var newBuildScenario = {

    "/pa/units/land/control_tower/control_tower.json": ["bugs", 0, { row: 2, column: 0 }],
    "/pa/units/land/control_tower/L_control_tower.json": ["L_bugs", 0, { row: 2, column: 0 }]
}
if (Build && Build.HotkeyModel && Build.HotkeyModel.SpecIdToGridMap) {
    _.extend(Build.HotkeyModel.SpecIdToGridMap, newBuildScenario);
}