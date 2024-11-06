<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TissueTypeSeeder extends Seeder
{
    public function run()
    {
        $tissueTypes = [
            ['codigo' => 'TEJ001', 'name' => 'Tejido Epitelial'],
            ['codigo' => 'TEJ002', 'name' => 'Tejido Conectivo'],
            ['codigo' => 'TEJ003', 'name' => 'Tejido Muscular'],
            ['codigo' => 'TEJ004', 'name' => 'Tejido Nervioso'],
        ];

        DB::table('type_tissues')->insert($tissueTypes);
    }
}
